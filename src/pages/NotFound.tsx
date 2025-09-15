import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="metro-card w-full max-w-md text-center">
        <CardContent className="pt-12 pb-8 px-8">
          <div className="mb-6">
            <div className="w-20 h-20 bg-warning-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-warning-orange" />
            </div>
            <h1 className="text-6xl font-bold text-primary-blue mb-2">404</h1>
            <h2 className="text-heading mb-4">Page Not Found</h2>
            <p className="text-caption mb-8">
              The requested page could not be found in the KMRL Manager Portal system.
            </p>
          </div>
          
          <Link to="/">
            <Button className="btn-primary w-full">
              <Home className="w-4 h-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-text-muted">
              If you believe this is an error, please contact the system administrator.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
