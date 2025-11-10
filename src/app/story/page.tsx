import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Sparkles, Droplets, Sun, Moon } from "lucide-react";

export default function StoryPage() {
  const process = [
    {
      step: 1,
      title: "Sourcing Ingredients",
      description: "We carefully select organic oils, butters, and botanicals from sustainable farms and ethical suppliers.",
      icon: Leaf
    },
    {
      step: 2,
      title: "Crafting the Recipe",
      description: "Each recipe is thoughtfully developed to balance cleansing properties with skin-nourishing benefits.",
      icon: Heart
    },
    {
      step: 3,
      title: "Hand Pouring",
      description: "We mix and pour each batch by hand, ensuring quality and adding our personal touch to every bar.",
      icon: Droplets
    },
    {
      step: 4,
      title: "Curing Process",
      description: "Soaps cure for 4-6 weeks, allowing them to harden and develop their full, luxurious lather.",
      icon: Sun
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Every bar is inspected, trimmed, and wrapped with care before finding its way to you.",
      icon: Sparkles
    },
    {
      step: 6,
      title: "Ready to Love",
      description: "Your soap arrives ready to transform your daily routine into a moment of natural luxury.",
      icon: Moon
    }
  ];

  const values = [
    {
      title: "Natural & Organic",
      description: "We use only pure, natural ingredients free from harsh chemicals, synthetic fragrances, and artificial colors."
    },
    {
      title: "Sustainable Practices",
      description: "From sourcing to packaging, we prioritize environmental responsibility and minimal waste."
    },
    {
      title: "Small Batch Quality",
      description: "Each batch is made in small quantities to ensure freshness and maintain our high standards."
    },
    {
      title: "Skin Health First",
      description: "Our formulas are designed to cleanse gently while nourishing and protecting your skin's natural balance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of passion, craftsmanship, and natural beauty
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-sans font-bold">How It All Began</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our journey started in a small kitchen, where a passion for natural skincare met 
                the art of traditional soap making. Frustrated by harsh commercial soaps filled 
                with synthetic ingredients, we set out to create something better—something that 
                would be gentle on skin and kind to the planet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a hobby quickly grew into a calling. Friends and family fell in love 
                with our handcrafted bars, and we realized we had something special. Today, we're 
                proud to share our artisan soaps with you, each one made with the same care and 
                attention as those very first batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Our Soap Making Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From raw ingredients to finished bars, every step is done with intention and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step} className="relative overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-primary">Step {item.step}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-sans font-bold">
            Ingredients We Love
          </h2>
          <p className="text-lg opacity-90">
            We source the finest natural ingredients: organic olive oil, coconut oil, shea butter, 
            essential oils, and botanical extracts. Every ingredient is chosen for its beneficial 
            properties and its ability to create a luxurious, skin-loving bar of soap.
          </p>
          <p className="text-lg opacity-90">
            No parabens. No sulfates. No synthetic fragrances. Just pure, natural goodness.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
