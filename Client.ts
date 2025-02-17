import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "yjtvc21u",
  dataset: "production",
  apiVersion: "2025-02-14", // Use current date
  useCdn: true,
});

export default sanityClient;
