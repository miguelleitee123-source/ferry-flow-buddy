import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FerryLogo from "@/components/FerryLogo";

const Welcome = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <FerryLogo className="w-24 h-24 mb-6" />
        
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Bem-vindo a<br />Ferry.ai
        </h1>
        
        <p className="text-white/90 text-center text-lg mb-12">
          Navegue de forma segura
        </p>
        
        <Button variant="ferry" size="lg" className="mb-6 px-8" asChild>
          <Link to="/auth">
            Comece agora <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        
        <p className="text-white/80 text-sm">
          Já possui uma conta?{" "}
          <Link to="/auth" className="text-primary font-semibold underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
