import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to our newsletter community",
    });
  };

  const benefits = [
    "Exclusive early access to sales and new arrivals",
    "Personalized style recommendations",
    "Behind-the-scenes content and fashion tips",
    "Member-only discounts up to 30% off",
    "First look at limited edition collections"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Mail className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Stay in Style</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fashion enthusiasts and never miss out on the latest trends, 
            exclusive deals, and insider fashion tips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Newsletter Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Subscribe Now</CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to receive marketing emails. 
                    You can unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">You're all set!</h3>
                    <p className="text-muted-foreground">
                      Welcome to our fashion community. Check your inbox for a confirmation email.
                    </p>
                  </div>
                  <Badge variant="secondary" className="px-4 py-2">
                    Subscribed with {email}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Weekly Fashion Digest</h3>
              <p className="text-sm text-muted-foreground">
                Curated trends and styling tips delivered every Tuesday
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Exclusive Offers</h3>
              <p className="text-sm text-muted-foreground">
                Member-only discounts and early access to sales
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Style Inspiration</h3>
              <p className="text-sm text-muted-foreground">
                Seasonal lookbooks and outfit ideas from our stylists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;