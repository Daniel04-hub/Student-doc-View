import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section");
    uploadSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-chart-2/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Understand Better?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join thousands of students who are learning smarter with AI-powered document explanations
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToUpload}
              data-testid="button-cta-start"
              className="gap-2"
            >
              Start Explaining Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
