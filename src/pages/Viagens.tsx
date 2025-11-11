import { ArrowLeft, Plus, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const Viagens = () => {
  const ferries = [
    {
      id: 1,
      name: "Ferry São Luís 1",
      status: "boarding",
      capacity: 37,
      total: 40,
      nextTrip: "10h40",
    },
    {
      id: 2,
      name: "Ferry Alcântara 1",
      status: "departed",
      capacity: 40,
      total: 40,
      nextTrip: "13h30",
    },
    {
      id: 3,
      name: "Ferry Cujupe 1",
      status: "waiting",
      capacity: 10,
      total: 40,
      nextTrip: "14h30",
    },
    {
      id: 4,
      name: "Ferry São Luís 2",
      status: "boarding",
      capacity: 40,
      total: 40,
      nextTrip: "11h",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "boarding":
        return "bg-success";
      case "waiting":
        return "bg-warning";
      case "departed":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "boarding":
        return "Embarcando";
      case "waiting":
        return "Aguardando";
      case "departed":
        return "Saiu";
      default:
        return "Desconhecido";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/home"
            className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Filas de Embarque</h1>
        </div>
      </header>

      <div className="px-6 py-6">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span>: Embarcando</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span>: Aguardando</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span>: Saiu</span>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">Embarcações</h2>

        <div className="space-y-3">
          {ferries.map((ferry) => (
            <Link key={ferry.id} to={`/ferry/${ferry.id}`}>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Ship className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-bold">{ferry.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(ferry.status)}`} />
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Capacidade: {ferry.capacity}/{ferry.total}
                  </span>
                  <span className="text-muted-foreground">
                    Próxima viagem: {ferry.nextTrip}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Viagens;
