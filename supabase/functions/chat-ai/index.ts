const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json() as { messages: Message[] };
    console.log('Received chat request with messages:', messages.length);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // System prompt specific to ConectTeen
    const systemPrompt = `Você é um assistente virtual da ConectTeen, uma startup de tecnologia criada por adolescentes que oferece soluções de rede.

Informações sobre a ConectTeen:
- Fundada por 5 adolescentes entre 14 e 17 anos
- Oferecemos: instalação de redes Wi-Fi, segurança de redes, monitoramento via app, workshops de educação tecnológica
- Atendemos: escolas, pequenos negócios e comunidades
- Diferenciais: pacotes personalizados acessíveis, atendimento humanizado, sustentabilidade (reaproveitamento de equipamentos)
- Localização: Fortaleza, CE - Brasil
- Contato: (85) 98413-3989 | contato@conectteen.com

Seja prestativo, amigável e técnico quando necessário. Responda em português brasileiro.
Se o usuário tiver dúvidas sobre preços ou agendamentos específicos, peça para ligar ou usar o botão de ligação.`;

    console.log('Calling Lovable AI gateway...');
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'rate_limit', 
            message: 'Limite de requisições excedido. Tente novamente em alguns instantes.' 
          }),
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'payment_required', 
            message: 'Créditos insuficientes. Entre em contato conosco pelo telefone.' 
          }),
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      throw new Error(`AI gateway error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('AI response received successfully');

    const aiMessage = data.choices?.[0]?.message?.content;
    if (!aiMessage) {
      throw new Error('No response from AI');
    }

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in chat-ai function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'internal_error',
        message: error instanceof Error ? error.message : 'Erro ao processar sua mensagem. Tente novamente.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
