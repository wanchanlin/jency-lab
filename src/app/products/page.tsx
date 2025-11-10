"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lavender Dreams",
    price: 12.99,
    category: "Floral",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
    description: "Calming lavender with shea butter for relaxation",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 2,
    name: "Citrus Burst",
    price: 11.99,
    category: "Citrus",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    description: "Energizing orange and lemon blend",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 3,
    name: "Rose Garden",
    price: 13.99,
    category: "Floral",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
    description: "Luxurious rose petals and essential oils",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 4,
    name: "Mint Refresh",
    price: 11.99,
    category: "Herbal",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    description: "Cool peppermint and eucalyptus",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 5,
    name: "Honey Oat",
    price: 12.99,
    category: "Natural",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
    description: "Gentle oatmeal with raw honey",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 6,
    name: "Charcoal Detox",
    price: 14.99,
    category: "Specialty",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    description: "Activated charcoal for deep cleansing",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 7,
    name: "Coconut Cream",
    price: 12.99,
    category: "Natural",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
    description: "Tropical coconut with cocoa butter",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  
  },
  {
    id: 8,
    name: "Tea Tree Fresh",
    price: 13.99,
    category: "Herbal",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    description: "Purifying tea tree and mint",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  }
];

const categories = ["All", "Floral", "Citrus", "Herbal", "Natural", "Specialty"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-sans font-bold">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted soaps, each made with love and natural ingredients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-center pt-2">
                  <p className="text-sm text-muted-foreground mt-1">{product.ingredients}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      More Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
