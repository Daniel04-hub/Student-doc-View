import { Card } from "@/components/ui/card";
import { List, FileText, Key, Share2, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: List,
    title: "Bullet Points or Paragraphs",
    description: "Choose your preferred format - concise bullet points or detailed paragraph explanations",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description: "Support for PDF, DOCX, TXT files, web URLs, and even image uploads",
  },
  {
    icon: Key,
    title: "Key Terms Explained",
    description: "Automatic identification and simple definitions of complex terminology",
  },
  {
    icon: Share2,
    title: "Shareable Links",
    description: "Get a unique link for each explanation to share with classmates or save for later",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your explanations in seconds, not minutes - powered by advanced AI",
  },
  {
    icon: Shield,
    title: "Student-Friendly",
    description: "Clear, jargon-free language designed specifically for student comprehension",
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand complex documents quickly and easily
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:-translate-y-1 transition-transform"
              data-testid={`card-feature-${index}`}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
