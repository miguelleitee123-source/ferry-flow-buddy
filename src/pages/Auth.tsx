import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import FerryLogo from "@/components/FerryLogo";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    // Simular login/cadastro
    toast({
      title: isLogin ? "Login realizado!" : "Conta criada!",
      description: "Bem-vindo ao Ferry.ai",
    });
    
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary rounded-2xl p-4 mb-4">
            <FerryLogo className="w-12 h-12" />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-1">
            {isLogin ? "Entre no Ferry.ai" : "Cadastre-se no Ferry.ai"}
          </h1>
          <p className="text-muted-foreground text-center">
            Personalize sua viagem
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elementary221b@gmail.com"
                className="pl-10 h-12 border-2 border-primary/20 focus:border-primary rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
                className="pl-10 pr-10 h-12 border-2 border-primary/20 focus:border-primary rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" variant="dark" size="lg" className="w-full h-12">
            Entrar <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="flex justify-center gap-4 mb-8">
          <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-foreground underline"
            >
              {isLogin ? "Cadastre-se." : "Entre."}
            </button>
          </p>
          
          {isLogin && (
            <button className="text-sm text-primary font-medium">
              Esqueceu a senha?
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

// Missing import
import { ArrowRight } from "lucide-react";
