import { Bell, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  const userTicket = {
    ferry: "Ferry Cujupe 1",
    status: "waiting",
    route: "Cujupe → São Luís",
    boardingTime: "14:20",
    arrival: "15:05",
    vehicleType: "motorcycle",
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-dark text-dark-foreground px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Pedro"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-dark-foreground/70">Jun 25, 2025</p>
              <h2 className="text-xl font-bold">Olá, Pedro</h2>
            </div>
          </div>
          
          <button className="w-10 h-10 rounded-xl border border-dark-foreground/20 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Ticket Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Seu Bilhete</h3>
          
          <Card className="p-4 shadow-[0_2px_8px_0_hsl(0_0%_0%_/_0.08)]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-lg mb-1">{userTicket.ferry}</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Travessia: {userTicket.route}
                </p>
                <p className="text-sm text-muted-foreground">
                  Horário de Embarque: {userTicket.boardingTime}
                </p>
                <p className="text-sm text-muted-foreground">
                  Previsão de chegada: {userTicket.arrival}
                </p>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <Badge 
                  variant="outline"
                  className="bg-warning text-warning-foreground border-warning"
                >
                  Status:
                </Badge>
                
                <div className="w-16 h-16 bg-dark rounded-lg flex items-center justify-center text-3xl">
                  🏍️
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                *Mostrar Bilhete/QR code no Embarque
              </p>
              
              <div className="w-16 h-16 bg-dark rounded p-1">
                <div className="w-full h-full bg-white rounded grid grid-cols-3 gap-[2px] p-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-dark rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Info Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Saiba mais</h3>
            <button className="text-primary text-sm font-medium flex items-center gap-1">
              Ver Tudo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            <Card className="min-w-[160px] bg-primary text-primary-foreground p-4">
              <ChevronRight className="w-5 h-5 mb-2" />
              <p className="text-xs mb-1">Quem somos nós?</p>
              <p className="font-bold text-sm">Viva melhor</p>
            </Card>
            
            <Card className="min-w-[160px] bg-warning text-warning-foreground p-4">
              <ChevronRight className="w-5 h-5 mb-2" />
              <p className="text-xs mb-1">🚢</p>
              <p className="font-bold text-sm">Navegue suas vidas</p>
            </Card>
            
            <Card className="min-w-[160px] bg-dark text-dark-foreground p-4">
              <p className="text-2xl mb-1">🤖</p>
              <p className="font-bold text-sm rotate-90 origin-left mt-8">MAIS</p>
            </Card>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
