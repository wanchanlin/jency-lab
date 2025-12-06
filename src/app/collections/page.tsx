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
import { products } from "@/data/collections";

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
    const normalize = (value?: string) => value?.toLowerCase() ?? "";
    let filtered = selectedCategory === "All" 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        normalize(product.name).includes(query) ||
        normalize(product.scent).includes(query) ||
        normalize(product.description).includes(query) ||
        normalize(product.category).includes(query) ||
        normalize(product.ingredients).includes(query)
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
                    <hr className="my-2"/> 
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground mt-2">Scent</p>
                    <hr className="my-2"/> 
                     <p className="text-sm text-muted-foreground mt-1">{product.scent}</p>
                  </div>
                  <div>
                  <p className="text-sm font-bold text-muted-foreground mt-2">Ingredients</p>
                  <hr className="my-2"/> 
                  <div className="flex items-center justify-left pt-2">
                    <p className="text-sm text-muted-foreground ">{product.ingredients}</p>
                  </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-primary">
                      {/* ${product.price.toFixed(2)} */}
                    </span>
                    <Button size="sm" asChild>
                      <Link href="/contact">Contact Us</Link>
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
