import React from "react";

function Design() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in the power of minimalist design to create versatile
                pieces that stand the test of time. Each garment is thoughtfully
                crafted to blend seamlessly into your wardrobe.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Timeless Aesthetics
                    </h3>
                    <p className="text-gray-600">
                      Creating pieces that transcend seasonal trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Functional Details
                    </h3>
                    <p className="text-gray-600">
                      Every element serves a purpose in comfort and style
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Design;
