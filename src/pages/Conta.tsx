import { ArrowLeft, Ticket, Volume2, Bell, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Conta = () => {
  const [settings, setSettings] = useState({
    offlineTickets: true,
    soundAlerts: true,
    boardingNotifications: true,
    nightMode: true,
  });

  const updateSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-dark text-dark-foreground px-6 py-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <Link
            to="/home"
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Configurações</h1>
        </div>
      </header>

      <div className="px-6 py-6 space-y-8">
        {/* Profile Options */}
        <div className="bg-card rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold mb-4">Opções do Perfil</h2>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Nome:</p>
            <p className="font-medium">Pedro Silva</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Email:</p>
            <p className="font-medium">elementary221b@gmail.com</p>
          </div>
          
          <button className="text-primary font-medium text-sm">
            Editar Perfil
          </button>
        </div>

        {/* General Options */}
        <div>
          <h2 className="text-lg font-bold mb-4">Opções Gerais</h2>
          
          <div className="space-y-3">
            <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Salvar Bilhetes Offline</span>
              </div>
              <Switch
                checked={settings.offlineTickets}
                onCheckedChange={() => updateSetting("offlineTickets")}
              />
            </div>

            <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Alerta Sonoros de Embarque</span>
              </div>
              <Switch
                checked={settings.soundAlerts}
                onCheckedChange={() => updateSetting("soundAlerts")}
              />
            </div>

            <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Notificação de Embarque</span>
              </div>
              <Switch
                checked={settings.boardingNotifications}
                onCheckedChange={() => updateSetting("boardingNotifications")}
              />
            </div>

            <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Modo Noturno</span>
              </div>
              <Switch
                checked={settings.nightMode}
                onCheckedChange={() => updateSetting("nightMode")}
              />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Conta;
