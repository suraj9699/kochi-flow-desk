import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import AIChat from "./AIChat";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <AIChat />
    </div>
  );
};

export default Layout;