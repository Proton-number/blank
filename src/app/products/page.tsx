import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function ProductsPage() {
  const sampleProducts = [
    {
      id: 1,
      title: "Classic White T-Shirt",
      description: "Premium cotton blank t-shirt perfect for custom designs",
      imageUrl: "/api/placeholder/600/600",
      slug: "classic-white-tshirt",
    },
    {
      id: 2,
      title: "Black Hoodie",
      description: "Comfortable cotton-blend hoodie for brand designs",
      imageUrl: "/api/placeholder/600/600",
      slug: "black-hoodie",
    },
    {
      id: 3,
      title: "Canvas Tote Bag",
      description: "Durable canvas tote for eco-friendly merchandise",
      imageUrl: "/api/placeholder/600/600",
      slug: "canvas-tote",
    },
    {
      id: 4,
      title: "Premium Crewneck",
      description: "Soft cotton blend crewneck for superior comfort",
      imageUrl: "/api/placeholder/600/600",
      slug: "premium-crewneck",
    },
    {
      id: 5,
      title: "Baseball Cap",
      description: "Six-panel structured cap for embroidery designs",
      imageUrl: "/api/placeholder/600/600",
      slug: "baseball-cap",
    },
    {
      id: 6,
      title: "Athletic Shorts",
      description: "Performance fabric shorts for sportswear brands",
      imageUrl: "/api/placeholder/600/600",
      slug: "athletic-shorts",
    },
    {
      id: 7,
      title: "Zip-Up Hoodie",
      description: "Full-zip hoodie perfect for custom branding",
      imageUrl: "/api/placeholder/600/600",
      slug: "zip-hoodie",
    },
    {
      id: 8,
      title: "Tank Top",
      description: "Lightweight cotton tank for summer collections",
      imageUrl: "/api/placeholder/600/600",
      slug: "tank-top",
    },
    {
      id: 9,
      title: "Long Sleeve Tee",
      description: "Classic long sleeve shirt for versatile designs",
      imageUrl: "/api/placeholder/600/600",
      slug: "long-sleeve",
    },
    {
      id: 10,
      title: "Beanie",
      description: "Knit beanie ready for embroidered logos",
      imageUrl: "/api/placeholder/600/600",
      slug: "beanie",
    },
    {
      id: 11,
      title: "Polo Shirt",
      description: "Professional polo for business casual wear",
      imageUrl: "/api/placeholder/600/600",
      slug: "polo-shirt",
    },
    {
      id: 12,
      title: "Drawstring Bag",
      description: "Lightweight backpack for promotional items",
      imageUrl: "/api/placeholder/600/600",
      slug: "drawstring-bag",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Blank Products
          </h1>
          <p className="text-gray-600">
            High-quality blank products ready for your custom designs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>

              {/* Product Info */}
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </CardContent>

              {/* Action Buttons */}
              <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  // onClick={() =>
                  //   (window.location.href = `/products/${product.slug}`)
                  // }
                >
                  View Details
                </Button>
                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Design
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
