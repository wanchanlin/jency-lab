"use client";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Heart,
  Sprout,
  ShoppingBag, // Added for the product card
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Added CardFooter
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { products } from "@/data/collections";
import CustomButton from "@/components/button";
import Image from "next/image";
import CTA from "@/components/cta2";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type Product = {
  id: number;
  name: string;
  price: number;
  scent?: string;  // Made optional with ?
  category: string;
  image: string;
  description: string;
  ingredients: string;
};

export default function Page() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".box", {
        y: -100,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          markers: false,
        },
      });
      gsap.to(".soap", {
        duration: 1,
        ease: "power1.out",
        y: -50,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".soap",
          markers: false,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Get first 4 products as featured products
const featuredProducts = products.slice(0, 4).map((product: Product) => ({
  id: product.id,
  name: product.name,
  price: `$${product.price.toFixed(2)}`,
  image: product.image,
  description: product.description,
  ingredients: product.ingredients,
  scent: product.scent || 'No scent specified', // Provide a default value
}));

  return (
    <div ref={ref} className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          {/* Ensure this path is correct relative to your public folder */}
          <source src="/videos/bubble.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="absolute inset-0 to-background z-[1]" />

        <div className="relative z-10 container text-center space-y-6 px-4 box mt-36">
          <h1 className="text-5xl text-white md:text-7xl font-sans font-bold tracking-tight">
            Handcrafted with Love
          </h1>
          <p className="text-xl text-white md:text-2xl opacity-90 max-w-2xl mx-auto">
            Natural skin care made for your skin and soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CustomButton
              href="/collections"
              text="See Collection"
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
              className="text-lg"
            />
            <Button size="lg" variant="outline" asChild className="text-lg">
              <Link href="/story">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-white md:text-4xl font-sans font-bold">
              Crafted by Hand, Inspired by Nature
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Every bar of soap we create is a labor of love. Using only the
              finest natural ingredients, we craft each batch by hand in small
              quantities to ensure the highest quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <Sprout className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">100% Natural</h3>
                  <p className="text-sm text-white/80">
                    Only pure, organic ingredients from trusted sources
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">Handmade</h3>
                  <p className="text-white/80 text-sm">
                    Crafted in small batches with attention to detail
                  </p>
                </div>
              </div>
              <Image
                className="mx-auto mt-32 order-first md:order-none soap"
                src="/images/soap.png"
                alt="Handcrafted soap bars"
                width={160}
                height={320}
              />
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">Skin Loving</h3>
                  <p className="text-sm text-white/80">
                    Gentle formulas that nourish and protect
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">Vegan Options</h3>
                  <p className="text-sm text-white/80">
                    Plant-based recipes that are gentle on your skin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
              <div className="space-y-3 text-left">
                <h2 className="text-3xl md:text-4xl font-sans font-bold">
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer a wide range of services to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold">Customized Skincare</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized skincare services to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold">Seasonal Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer seasonal skincare packages to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold">Gift Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized gift packages to help you take care of
                  your skin and body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full items-center container my-8">
        <div className="flex-1 border-b border-gray-300"></div>
        <Link
          href="/contact"
          className="px-4 py-2 bg-primary text-white rounded-md mx-4 hover:bg-primary/90 transition"
        >
          Contact Us
        </Link>
        <div className="flex-1 border-b border-gray-300"></div>
      </div>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most loved handcrafted soaps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              // <Card
              //   key={product.id}
              //   className="group overflow-hidden border-primary/20 flex flex-col h-full"
              // >
              //   {/* Product Image */}
              //   <div className="relative aspect-square overflow-hidden bg-muted">
              //     {/* Using Next.js Image component safely */}
              //     {product.image ? (
              //       <Image
              //         src={product.image}
              //         alt={product.name}
              //         fill
              //         className="object-cover transition-transform group-hover:scale-105"
              //       />
              //     ) : (
              //       <div className="flex items-center justify-center w-full h-full bg-gray-200">
              //         <ShoppingBag className="h-10 w-10 text-gray-400" />
              //       </div>
              //     )}
              //   </div>

              //   <CardContent className="p-4 flex-grow">
              //     <div className="space-y-2">
              //       <h3 className="font-semibold text-lg leading-tight">
              //         {product.name}
              //       </h3>
              //       <p className="text-sm text-muted-foreground line-clamp-2">
              //         {product.description}
              //       </p>
              //     </div>
              //   </CardContent>

              //   <CardFooter className="p-4 pt-0 flex items-center justify-between">
              //     <span className="font-bold text-lg text-primary">
              //       {product.price}
              //     </span>
              //     <Button variant="outline" size="sm" className="gap-2">
              //       Details
              //     </Button>
              //   </CardFooter>
              // </Card>

               <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <hr className="my-2"/> 
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mt-1">
  {product.scent || 'No scent information available'}
</p>
                    <hr className="my-2"/> 
                     <p className="text-sm text-muted-foreground mt-1">{product.scent}</p>
                  </div>
                  <div>
                  <p className="text-sm font-bold text-muted-foreground mt-2">Ingredients</p>
                  <hr className="my-2"/> 
                  <div className="flex items-left justify-left pt-2">
                    <p className="text-sm text-muted-foreground ">{product.ingredients}</p>
                  </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-primary">
                      {/* ${product.price.toFixed(2)} */}
                    </span>
                   
                  </div>
                </CardContent>
              </Card>
           
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/collections">
                View All Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}