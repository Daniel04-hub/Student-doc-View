import { Upload, Sparkles, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "Upload or Paste",
    description: "Upload your document (PDF, DOCX, TXT, or image) or paste a web URL",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our AI reads and understands the content, extracting key concepts",
  },
  {
    icon: FileText,
    title: "Get Explanation",
    description: "Receive clear summaries as bullet points or paragraphs with key terms",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to understand any document
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:-translate-y-1 transition-transform"
              data-testid={`card-step-${index + 1}`}
            >
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
