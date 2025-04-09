// ./sanity/lib/live.ts
import { defineLive } from "next-sanity";
import { createClient } from "@sanity/client";

// Create a fresh client instance specifically for live queries
const liveClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-03-05", // Use your current API version
  useCdn: false, // Required for live preview
  perspective: "published",
  token: process.env.SANITY_API_TOKEN, // If using private datasets
});

// Export the live query utilities
export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
});

// TypeScript interface for better type safety (optional)
export interface LiveQueryConfig {
  client: ReturnType<typeof createClient>;
  // Add any additional config options you need
}
