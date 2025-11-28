import React from "react";
import CustomButton from "@/components/button";
import { ArrowRight } from "lucide-react";
  export default function CTA() {
  return (
      
  
  <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/soap.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
        </div>
        <div className=" z-10 container mx-auto px-4 py-16 grid  sm:grid-cols-1 md:grid-cols-2 gap-8 pt-8 mw-auto ">
          {/* <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2  gap-8 pt-8 mw-auto"> */}

          {/* --- COLUMN 1: Visual Placeholder --- */}
          <div className="hidden md:flex items-center justify-center pt-8 md:pt-0">
            {/* Replace this div with a high-quality image of soap or skincare products */}
            {/* <div className="w-full max-w-sm h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-dashed border-gray-400">
                  [Image Placeholder: Natural Soap Bar]
              </div> */}
          </div>

          {/* === COLUMN 2: Text & Call to Action === */}


          
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left md:mw-auto">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Experience Natural Skincare
            </h2>

            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-90">
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