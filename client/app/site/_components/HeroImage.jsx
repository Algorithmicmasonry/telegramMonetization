import { BackgroundGradient } from "@/components/ui/background-gradient";
import { heroImage } from "@/images";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="Flex items-center justify-center max-w-[1400px] mx-auto">
      <BackgroundGradient className="flex items-center justify-center p-2  mx-auto">
        <div>
          <div className="relative  overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl border-2 sm:border-4 lg:border-8 border-primary shadow-xl">
            <Image src={heroImage} alt="hero" />
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default HeroImage;
