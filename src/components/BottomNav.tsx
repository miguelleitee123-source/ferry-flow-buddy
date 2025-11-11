import { Home, Ship, User } from "lucide-react";
import { NavLink } from "./NavLink";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center gap-1 px-4 py-2 text-muted-foreground transition-colors"
          activeClassName="text-primary"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Início</span>
        </NavLink>
        
        <NavLink
          to="/viagens"
          className="flex flex-col items-center justify-center gap-1 px-4 py-2 text-muted-foreground transition-colors"
          activeClassName="text-primary"
        >
          <Ship className="w-6 h-6" />
          <span className="text-xs font-medium">Viagens</span>
        </NavLink>
        
        <NavLink
          to="/conta"
          className="flex flex-col items-center justify-center gap-1 px-4 py-2 text-muted-foreground transition-colors"
          activeClassName="text-primary"
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Conta</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
