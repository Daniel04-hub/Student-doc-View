import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Educational_hero_illustration_students_e748135e.png";

export function Hero() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section");
    uploadSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-chart-2/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Understand Any Document{" "}
                <span className="text-primary">Instantly</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Upload documents or paste URLs to get clear, student-friendly explanations in seconds. 
                Transform complex content into simple key points or easy paragraphs.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToUpload}
                data-testid="button-get-started"
                className="gap-2"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-view-example"
              >
                View Example
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span>PDF, DOCX, TXT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span>Web Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span>Images</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning with digital documents"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
