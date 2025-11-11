import { ArrowLeft, Bike, Car, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BottomNav from "@/components/BottomNav";

const FerryDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const ferry = {
    name: "Ferry Cujupe 1",
    status: "waiting",
    nextBoarding: "14h20",
    from: "Cujupe",
    to: "São Luís",
    boardingTime: "14:20",
    arrival: "15h05",
    capacity: 10,
    total: 40,
  };

  const vehicleTypes = [
    { id: "motorcycle", name: "Moto", price: 25.0, icon: Bike },
    { id: "car", name: "Carro Passeio", price: 45.0, icon: Car },
    { id: "suv", name: "SUV", price: 65.0, icon: Car },
    { id: "truck", name: "Caminhões leves", price: 120.0, icon: Truck },
  ];

  const upcomingTrips = [
    { time: "15h20", capacity: 0, total: 40 },
    { time: "16h20", capacity: 0, total: 40 },
  ];

  const handlePurchase = () => {
    if (!selectedVehicle) {
      toast({
        title: "Selecione um veículo",
        description: "Escolha o tipo de veículo antes de comprar",
        variant: "destructive",
      });
      return;
    }

    const vehicle = vehicleTypes.find((v) => v.id === selectedVehicle);
    toast({
      title: "Bilhete comprado!",
      description: `${vehicle?.name} - R$ ${vehicle?.price.toFixed(2)}`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-4">
          <Link
            to="/viagens"
            className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{ferry.name}</h1>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm">Status:</span>
            <div className="w-4 h-4 rounded-full bg-warning" />
          </div>
          <span className="text-sm">Próximo Embarque: {ferry.nextBoarding}</span>
        </div>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Current Ticket */}
        <Card className="p-4">
          <h3 className="font-bold mb-4">Bilhete mais recente</h3>
          
          <div className="space-y-2 text-sm mb-4">
            <p>
              <span className="font-medium">Local de Embarque:</span> {ferry.from}
            </p>
            <p>
              <span className="font-medium">Destino:</span> {ferry.to}
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium text-sm mb-3">Pesos:</p>
            <div className="grid grid-cols-4 gap-2">
              {vehicleTypes.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                    selectedVehicle === vehicle.id
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <vehicle.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs text-success font-medium">
                    R$ {vehicle.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              *Moto, Carro Passeio, SUV e Caminhões leves
            </p>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <p>
              <span className="font-medium">Horário de embarque:</span> {ferry.boardingTime}
            </p>
            <p>
              <span className="font-medium">Previsão de chegada:</span> {ferry.arrival}
            </p>
            <p>
              <span className="font-medium">Capacidade:</span> {ferry.capacity}/{ferry.total}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-success">
              R$ {vehicleTypes.find((v) => v.id === selectedVehicle)?.price.toFixed(2) || "25,00"}
            </span>
            <Button
              variant="ferry"
              size="lg"
              onClick={handlePurchase}
              className="gap-2"
            >
              <Ticket className="w-5 h-5" />
              Comprar
            </Button>
          </div>
        </Card>

        {/* Upcoming Trips */}
        <div>
          <h3 className="text-lg font-bold mb-4">Próximos Horários</h3>
          
          <div className="space-y-3">
            {upcomingTrips.map((trip, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      🚢
                    </div>
                    <div>
                      <h4 className="font-bold">{ferry.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Capacidade: {trip.capacity}/{trip.total}
                      </p>
                    </div>
                  </div>
                  
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Próxima Viagem: {trip.time}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default FerryDetail;

// Missing imports
import { Ticket, Plus } from "lucide-react";
