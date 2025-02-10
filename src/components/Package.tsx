import React from "react";

function Package() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sustainable Packaging
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Recyclable Materials
              </h3>
              <p className="text-gray-600">
                100% recyclable and biodegradable packaging
              </p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Minimal Waste</h3>
              <p className="text-gray-600">
                Optimized packaging sizes to reduce waste
              </p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Reusable Design</h3>
              <p className="text-gray-600">
                Packaging that serves multiple purposes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Package;
