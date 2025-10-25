import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Link as LinkIcon, Loader2 } from "lucide-react";

export function UploadSection() {
  const [mode, setMode] = useState<"bullets" | "paragraph">("bullets");
  const [count, setCount] = useState(5);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing document:", { mode, count, file, url });
    setIsProcessing(true);
    // TODO: remove mock functionality - simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      console.log("Processing complete");
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    }
  };

  return (
    <section id="upload-section" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a document or paste a URL to get started
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Upload Document</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.docx,.txt,image/*"
                    onChange={handleFileChange}
                    data-testid="input-file"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                    <p className="text-sm font-medium mb-1">
                      {file ? file.name : "Click to upload"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, DOCX, TXT, or Image
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="url-input" className="text-base font-semibold">
                  Or Paste URL
                </Label>
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="url-input"
                      type="url"
                      placeholder="https://example.com/article"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-10"
                      data-testid="input-url"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Paste any web page URL to extract and explain its content
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <Label className="text-base font-semibold">Output Format</Label>
              <RadioGroup value={mode} onValueChange={(v) => setMode(v as "bullets" | "paragraph")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bullets" id="bullets" data-testid="radio-bullets" />
                  <Label htmlFor="bullets" className="font-normal cursor-pointer">
                    Key Points (Bullet List)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paragraph" id="paragraph" data-testid="radio-paragraph" />
                  <Label htmlFor="paragraph" className="font-normal cursor-pointer">
                    Simple Explanation (Paragraph)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label htmlFor="count" className="text-base font-semibold">
                Number of {mode === "bullets" ? "Points" : "Sentences"}
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  id="count"
                  type="number"
                  min="1"
                  max="10"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-24"
                  data-testid="input-count"
                />
                <span className="text-sm text-muted-foreground">
                  (1-10)
                </span>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isProcessing || (!file && !url)}
              data-testid="button-explain"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Explain Document"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
