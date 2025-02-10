import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen space-y-8">
        <div className=" mt-20 md:mt-10 space-y-10">
          <h1 className=" text-6xl md:text-8xl font-semibold text-white">
            Redefining style, empowering confidence.
          </h1>
          <p className="text-xl text-gray-200">
            We craft designs that make you look and feel your best
          </p>
          <div className="flex space-x-4 mt-4">
            <Button
              className="group relative  h-12 rounded-xl text-xl"
              variant="outline"
            >
              <span className="relative flex items-center font-medium ">
                Get started{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-xl h-12 rounded-xl hover:bg-transparent hover:text-white/80"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
