"use client";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Heart,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { products } from "@/data/collections";
import CustomButton from "@/components/button";
import Image from "next/image"; 
import CTA from "@/components/cta2";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  ingredients: string;
};


export default function Page() {
  const ref = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (typeof window === 'undefined' || !ref.current) return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx = gsap.context(() => {
    gsap.to('.box', {
      y: -100,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.box',
        start: 'top center',
        markers: false, // show markers while debugging
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
          preload="auto" // Helps load the video instantly
        >
          {/* Use a modern format like WebM first for better compression */}
          {/* <source src="/videos/your-background-video.webm" type="video/webm" /> */}
          <source src="../videos/bubble.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0  to-background z-[1]" />

        <div className="relative z-10 container text-center space-y-6 px-4 box mt-36">
          <h1 className="text-5xl text-white md:text-7xl font-sans font-bold tracking-tight">
            Handcrafted with Love
          </h1>
          <p className="text-xl text-white md:text-2xl text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-16 md:py-24 bg-muted/30 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-white md:text-4xl font-sans font-bold">
              Crafted by Hand, Inspired by Nature
            </h2>
            <p className="text-lg text-white text-muted-foreground leading-relaxed">
              Every bar of soap we create is a labor of love. Using only the
              finest natural ingredients, we craft each batch by hand in small
              quantities to ensure the highest quality. Our commitment to
              sustainability and your skin's health drives everything we do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-6 ">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white bg-primary/10 flex items-center justify-center mx-auto">
                    <Sprout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">100% Natural</h3>
                  <p className="text-sm text-white text-muted-foreground">
                    Only pure, organic ingredients from trusted sources
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto">
                    <Heart className="h-6  w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">Handmade</h3>
                  <p className=" text-white text-sm text-muted-foreground">
                    Crafted in small batches with attention to detail
                  </p>
                </div>
              </div>
              <Image
                className="mx-auto order-first md:order-none"
                src="/images/soap.png"
                alt="Handcrafted soap bars"
                width={220}
                height={320}
              />
              <div className="space-y-6 ">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">Skin Loving</h3>
                  <p className="text-sm text-white text-muted-foreground">
                    Gentle formulas that nourish and protect
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12  rounded-full bg-white flex items-center justify-center mx-auto">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">Vegan Options</h3>
                  <p className="text-sm text-white text-muted-foreground">
                    Plant-based recipes that are gentle on your skin and the
                    planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of services to help you take care of your skin and body.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-sans font-bold">
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer a wide range of services to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                {/* <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Flower className="h-6 w-6 text-primary" />
                </div> */}
                <h3 className="font-semibold">Customized Skincare</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized skincare services to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3  bg-primary/10 p-4 rounded-lg">
                {/* <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Package className="h-6 w-6 text-primary" />
                </div> */}
                <h3 className="font-semibold">Seasonal Skincare Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer seasonal skincare packages to help you take care of
                  your skin and body.
                </p>
              </div>
              <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                {/* <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Gift className="h-6 w-6 text-primary" />
                </div> */}
                <h3 className="font-semibold">Customized Gift Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized gift packages to help you take care of
                  your skin and body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="my-4 border-t-8 border-dotted border-primary/10 container" /> */}
      <div className="flex w-full items-center container m">
        <div className="flex-1 border-b border-gray-300"></div>
        <Link
          href="/contact"
          className="px-4 py-2 bg-primary text-white rounded-md"
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
            {featuredProducts.map(
              (product: {
                id: number;
                name: string;
                price: string;
                image: string;
                description: string;
              }) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-primary">
                        {/* {product.price} */}
                      </span>
                      <Button size="sm">View Collections</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
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
            
      <CTA/>


   

      <Footer />
    </div>
  );
}
