"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SearchBar from "@/components/search-bar";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cherry Blossom",
    price: 12.99,
    category: "Floral",
    image: "images/products/sakura.jpg",
    description: "A soft cherry blossom scent with a gentle floral finish for calming relaxation.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 2,
    name: "Charcoal Detox",
    price: 14.99,
    category: "Specialty",
    image: "images/products/charcoal.jpg",
    description: "Activated charcoal helps remove impurities and deeply cleanse the skin.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 3,
    name: "Coffee Dream",
    price: 11.99,
    category: "Specialty",
    image: "images/products/coffee.jpg",
    description: "A rich coffee-infused bar that gently exfoliates and awakens the senses.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 4,
    name: "Rose Garden",
    price: 13.99,
    category: "Floral",
    image: "images/products/lufarose.jpg",
    description: "A luxurious floral bar infused with rose petals and essential oils.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 5,
    name: "Mugwort Detox",
    price: 12.99,
    category: "Herbal",
    image: "images/products/herb.jpg",
    description: "A clarifying mugwort herbal shampoo bar that helps cleanse and refresh the scalp.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  },
  {
    id: 6,
    name: "Ocean Salt",
    price: 11.99,
    category: "Herbal",
    image: "images/products/oceansalt.jpg",
    description: "A cooling blend of peppermint and eucalyptus inspired by the fresh ocean breeze.",
    ingredients: "Oatmeal, Honey, Olive Oil, Coconut Oil, Shea Butter, Essential Oils"
  }
];

const categories = ["All", "Floral", "Citrus", "Herbal", "Natural", "Specialty"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize search query from URL params
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === "All" 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.ingredients.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

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

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container space-y-6">
          {/* Search Bar */}
          <div className="flex justify-center">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search products by name, description, or ingredients..."
              className="w-full max-w-2xl"
            />
          </div>
          
          {/* Category Filters */}
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
                      {/* <ShoppingCart className="h-4 w-4 mr-2" /> */}
                      Contact Us
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

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-sans font-bold">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading...
            </p>
          </div>
        </section>
        <Footer />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
