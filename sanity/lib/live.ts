// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";
import type { SanityClient } from "@sanity/client";

const typedClient: SanityClient = client.withConfig({
  apiVersion: "2023-01-01", // Replace 'vX' with your actual API version
});

export const { sanityFetch, SanityLive } = defineLive({
  client: typedClient,
});
