import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(263_70%_50%_/_0.1)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(280_70%_60%_/_0.1)_0%,transparent_70%)]"></div>
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating elements */}
          <div className="absolute -top-8 left-10 w-20 h-20 gradient-primary rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 right-10 w-16 h-16 gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Content */}
          <div className="glass rounded-3xl p-12 lg:p-16 border border-primary/20 shadow-glow-lg animate-scale-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to transform your social media?
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
              Start your free trial today
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Join thousands of creators who have already transformed their social media workflow. 
              No credit card required, cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button className="btn-primary text-lg px-8 py-4 group" size="lg">
                Start 7-Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground border-t border-border/30 pt-8">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">10,000+</span>
                <span>creators trust us</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">2M+</span>
                <span>posts scheduled</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">4.9★</span>
                <span>average rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;