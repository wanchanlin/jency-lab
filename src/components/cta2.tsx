import React from "react";
import CustomButton from "@/components/button";
import { ArrowRight } from "lucide-react";
  export default function CTA() {
  return (
      
  
  <section className="  mt-8  container relative bg-primary/10  flex items-center justify-center overflow-hidden mb-8 rounded-lg ">
       
        <div className=" container mx-auto px-8 py-16 grid gap-8  ">
          
          {/* === COLUMN 2: Text & Call to Action === */}


          
          <div className="space-y-6 text-center  ">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Experience Natural Skincare
            </h2>

            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Join thousands of happy customers who have discovered the
              difference handmade, natural soaps can make for their skin.
            </p>

            <div className="mt-4 md:mt-0">
              <CustomButton
                href="/contact"
                text="Contact Us"
                icon={ArrowRight}
                iconPosition="right"
                size="lg"
                className="text-lg"
              />
            </div>
          </div>
        </div>
      </section>
      );
      }