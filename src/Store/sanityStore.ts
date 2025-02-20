import sanityClient from "@/Client";
import { create } from "zustand";

interface Image {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

interface Product {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: Image;
  body: any;
  projectUrl: string;
}

interface SanityStore {
  error: null | string;
  products: Product[] | null;
  fetchProducts: () => Promise<void>;
}

export const useSanityStore = create<SanityStore>((set) => ({
  error: null,
  products: null,
  fetchProducts: async () => {
    const product_query = `*[_type == "product"] {
      title,
      description,
      slug,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      body,
      projectUrl
    }`;

    try {
      const response = await sanityClient.fetch<Product[]>(product_query);

      if (!response?.length) {
        set({ products: [], error: "No products found" });
        return;
      }

      set({ products: response, error: null });
    } catch (error) {
      set({ error: "Failed to fetch products", products: null });
    }
  },
}));
