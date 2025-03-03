import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "yjtvc21u",
  dataset: "production",
  apiVersion: "2025-02-07", // Use current date
  useCdn: false,
});

export default sanityClient;
