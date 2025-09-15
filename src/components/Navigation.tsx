import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Upload, Bell, User, Globe, Train, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const location = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/documents", label: "Documents", icon: "📂" },
    { path: "/audit", label: "Audit", icon: "📑" },
    { path: "/communication", label: "Communication", icon: "💬" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-pure-white border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-roboto font-bold text-lg text-text-dark">KMRL</span>
                <span className="font-roboto text-xs text-text-muted">Manager Portal</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-smooth flex items-center space-x-2 ${
                  isActive(item.path)
                    ? "bg-primary-blue text-white"
                    : "text-text-dark hover:bg-metro-light"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className={`relative flex-1 transition-smooth ${isSearchFocused ? 'scale-105' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
              <Input
                placeholder="Universal Search (English/Malayalam)..."
                className="pl-10 pr-4 bg-surface-grey border-none focus:ring-2 focus:ring-primary-blue"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Upload Button */}
            <Button className="btn-success hidden sm:flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-warning-orange text-white text-xs">
                  3
                </Badge>
              </Button>
            </div>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>മലയാളം</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-smooth flex items-center space-x-3 ${
                    isActive(item.path)
                      ? "bg-primary-blue text-white"
                      : "text-text-dark hover:bg-metro-light"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 pr-4 bg-surface-grey border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;