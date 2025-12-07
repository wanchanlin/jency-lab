"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query to reduce filtering operations
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 150); // 150ms delay - adjust as needed

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Optimized filter function
  const filterSection = useCallback((section: typeof faqSections[0], query: string) => {
    const lowerQuery = query.toLowerCase();
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const descMatch = section.description.toLowerCase().includes(lowerQuery);
    
    // If section title/description matches, show all items
    if (titleMatch || descMatch) {
      return {
        ...section,
        items: section.items,
      };
    }
    
    // Otherwise, filter items based on question/answer content
    const filteredItems = section.items.filter(
      (item) =>
        item.question.toLowerCase().includes(lowerQuery) ||
        item.answer.toLowerCase().includes(lowerQuery)
    );

    // Include section only if it has matching items
    if (filteredItems.length > 0) {
      return {
        ...section,
        items: filteredItems,
      };
    }
    return null;
  }, []);

  // Filter FAQ sections and items based on debounced search query
  const filteredSections = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return faqSections;
    }

    return faqSections
      .map((section) => filterSection(section, debouncedQuery))
      .filter((section): section is typeof faqSections[0] => section !== null);
  }, [debouncedQuery, filterSection]);

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
          <div className="flex justify-center">
            <SearchBar 
              className="w-full max-w-2xl" 
              value={searchQuery} 
              onChange={setSearchQuery}
              placeholder="Search questions or answers..."
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ingredients to shipping, here's everything you've asked us
            lately. Still unsure? Our inbox is always open.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30 flex-1">
        <div className="container space-y-10 max-w-5xl">
          {filteredSections.length === 0 && debouncedQuery.trim() ? (
            <Card className="border-primary/20">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  No FAQs found matching "{debouncedQuery}". Try a different search term.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSections.map((section) => {
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
            })
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
