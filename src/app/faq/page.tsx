import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CTA from "@/components/cta2";
import SearchBar from "@/components/search-bar";
import { Card, CardContent } from "@/components/ui/card";

import { faqSections } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


export default function FAQPage() {


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Need Answers?
          </p>
          <h1 className="text-4xl md:text-5xl font-sans font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ingredients to shipping, here’s everything you’ve asked us
            lately. Still unsure? Our inbox is always open.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30 flex-1">
        <div className="container space-y-10 max-w-5xl">
          {faqSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="border-primary/20">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-semibold">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {section.items.map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`${section.title}-${index}`}
                        className="border border-primary/10 rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-base font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
