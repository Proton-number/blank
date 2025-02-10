import React from "react";
import { Card, CardContent } from "./ui/card";

function Produce() {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How We Produce</h2>
            <p className="mt-4 text-lg text-gray-500">
              Crafting excellence through sustainable practices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">
                  Sustainable Materials
                </h3>
                <p className="text-gray-600">
                  We source only the finest eco-friendly materials, ensuring
                  both quality and sustainability.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">
                  Ethical Manufacturing
                </h3>
                <p className="text-gray-600">
                  Our production partners share our commitment to fair labor
                  practices and sustainable operations.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
                <p className="text-gray-600">
                  Every piece undergoes rigorous quality checks to ensure
                  lasting perfection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Produce;
