import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/kmrl-hero.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Processing",
      description: "Intelligent document routing with 94.7% accuracy",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable audit trails and secure transactions",
    },
    {
      icon: Globe,
      title: "Bilingual Support",
      description: "Full English and Malayalam language support",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-teal-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              KMRL Manager Portal
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Enterprise-grade document automation system with AI-driven intelligence and cross-departmental collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Button className="bg-white text-primary-blue hover:bg-white/90 px-8 py-3 text-lg">
                Access Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2,847</div>
                <div className="text-sm text-white/80">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">156</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">89%</div>
                <div className="text-sm text-white/80">Efficiency Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="metro-card bg-white/10 backdrop-blur-sm border-white/20 animate-slide-up"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-background">
          <path d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;