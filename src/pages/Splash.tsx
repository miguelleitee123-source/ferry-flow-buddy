import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FerryLogo from "@/components/FerryLogo";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4">
      <div className="animate-fade-in">
        <FerryLogo className="w-32 h-32 mb-8" />
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Ferry.ai
        </h1>
        <p className="text-white/90 text-center text-lg">
          Navegue de forma segura
        </p>
      </div>
    </div>
  );
};

export default Splash;
