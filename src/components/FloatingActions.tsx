import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FloatingActions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente virtual da ConectTeen. Como posso ajudá-lo hoje? 😊"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCall = () => {
    // Open phone dialer
    window.location.href = 'tel:+5585984133989';
    toast({
      title: "Iniciando chamada...",
      description: "Conectando você com nossa equipe!",
    });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      console.log('Sending message to AI:', userMessage);
      
      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: { 
          messages: [
            ...messages.filter(m => m.role !== "assistant" || m.content !== "Olá! Sou o assistente virtual da ConectTeen. Como posso ajudá-lo hoje? 😊"),
            { role: "user", content: userMessage }
          ]
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('AI response:', data);

      if (data.error) {
        if (data.error === 'rate_limit') {
          toast({
            title: "Limite excedido",
            description: data.message,
            variant: "destructive",
          });
        } else if (data.error === 'payment_required') {
          toast({
            title: "Serviço temporariamente indisponível",
            description: data.message,
            variant: "destructive",
          });
        } else {
          throw new Error(data.message || 'Erro desconhecido');
        }
        setIsLoading(false);
        return;
      }

      const aiResponse = data.message;
      setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
      setIsLoading(false);

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Desculpe, tivemos um problema. Tente usar o botão de ligação!",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <Card className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-2rem)] shadow-2xl border-2 border-primary z-50 animate-in slide-in-from-bottom-5">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat ConectTeen
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="border-t p-4 flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={isLoading}>
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl hover:shadow-[0_0_32px_hsla(210,100%,50%,0.6)] transition-all hover:scale-110"
          onClick={() => setIsChatOpen(!isChatOpen)}
          variant={isChatOpen ? "secondary" : "hero"}
          title="Chat com IA"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>

        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl bg-accent hover:bg-accent/90 hover:shadow-[0_0_32px_hsla(25,100%,60%,0.6)] transition-all hover:scale-110"
          onClick={handleCall}
          title="Ligar agora"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export default FloatingActions;
