import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CTA from "@/components/cta2";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Package,
  Truck,
  Recycle,
  Sparkles,
  Shield,
  Droplets,
} from "lucide-react";

export default function FAQPage() {
  const highlights = [
    {
      title: "Order Support",
      description: "We keep you updated from checkout to delivery with proactive status emails.",
      icon: Package,
    },
    {
      title: "Fast Shipping",
      description: "Small-batch orders leave our studio within 2–3 business days.",
      icon: Truck,
    },
    {
      title: "Eco Promise",
      description: "Plastic-free packaging and ingredients sourced with the planet in mind.",
      icon: Recycle,
    },
  ];

  const faqSections = [
    {
      title: "Ordering & Shipping",
      description: "Everything you need to know about timelines, delivery, and gift options.",
      icon: Truck,
      items: [
        {
          question: "How long does it take to process my order?",
          answer: "Orders are crafted, packed, and ready to ship within 2–3 business days. You’ll receive tracking details as soon as the parcel leaves our studio.",
        },
        {
          question: "Do you offer local pickup?",
          answer: "Local pickup in Toronto is available upon request—just leave us a note at checkout and we’ll coordinate the handoff via email.",
        },
        {
          question: "Can I send an order as a gift?",
          answer: "Absolutely! Add a gift note during checkout and we’ll handwrite it on a recycled card. Prices are never included in gift shipments.",
        },
      ],
    },
    {
      title: "Ingredients & Safety",
      description: "Learn how we source, test, and label every bar.",
      icon: Shield,
      items: [
        {
          question: "Are your soaps safe for sensitive skin?",
          answer: "Yes. We use gentle oils, clays, and botanicals, avoiding sulfates, parabens, and synthetic fragrances. Patch testing is still recommended for reactive skin.",
        },
        {
          question: "Are your products vegan?",
          answer: "Most recipes are vegan. When we use ingredients like local honey, it is clearly listed on the product page and label.",
        },
        {
          question: "How do you fragrance the soaps?",
          answer: "We rely on pure essential oils and plant absolutes—never artificial perfumes or dyes.",
        },
      ],
    },
    {
      title: "Product Care",
      description: "Tips to make every bar last and feel luxurious.",
      icon: Droplets,
      items: [
        {
          question: "How should I store my soap?",
          answer: "Let it dry between uses on a draining dish. Keeping bars out of direct streams of water extends their lifespan significantly.",
        },
        {
          question: "What’s the shelf life?",
          answer: "Unopened bars stay fresh for 12 months. Over time, natural scents may mellow but performance remains the same.",
        },
        {
          question: "Can I travel with your soap?",
          answer: "Definitely. Allow it to dry, then tuck it into the cotton bag we ship it in for a leak-free travel companion.",
        },
      ],
    },
    {
      title: "Custom & Wholesale",
      description: "Support for events, boutiques, and brand collaborations.",
      icon: Sparkles,
      items: [
        {
          question: "Do you create custom favors?",
          answer: "Yes—weddings, baby showers, and corporate gifts are some of our favorites. Reach out at least 6 weeks in advance for the best experience.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer: "Boutiques and spas can apply for wholesale access via our contact form. We’ll share line sheets and minimum order details once approved.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Need Answers?
          </p>
          <h1 className="text-4xl md:text-5xl font-sans font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ingredients to shipping, here’s everything you’ve asked us lately.
            Still unsure? Our inbox is always open.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
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
                            <h2 className="text-2xl font-semibold">{section.title}</h2>
                          </div>
                          <p className="text-muted-foreground">{section.description}</p>
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