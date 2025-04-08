// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";

// Define the config separately
const configuredClient = client.withConfig({
  apiVersion: "2025-03-05", // Replace with your actual version
});

export const { sanityFetch, SanityLive } = defineLive({
  // Directly use the configured client, no manual type import or casting
  client: configuredClient,
});
