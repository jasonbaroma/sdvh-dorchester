import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Dorchester",
  href: "/",
};

type LocationMetadata = {
  label: string;
  href: string;
  county: string;
  region: string;
  population: string;
};

const mainLocationMetadata: LocationMetadata = {
  label: "Dorchester",
  href: "/",
  county: "Dorset",
  region: "South West England",
  population: "21372",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Weymouth",
    href: `/${slugifyLocation("Weymouth")}`,
    county: "Dorset",
    region: "South West England",
    population: "53196",
  },
  {
    label: "Bridport",
    href: `/${slugifyLocation("Bridport")}`,
    county: "Dorset",
    region: "South West England",
    population: "13683",
  },
  {
    label: "Wareham",
    href: `/${slugifyLocation("Wareham")}`,
    county: "Dorset",
    region: "South West England",
    population: "8047",
  },
  {
    label: "Sturminster Newton",
    href: `/${slugifyLocation("Sturminster Newton")}`,
    county: "Dorset",
    region: "South West England",
    population: "4879",
  },
  {
    label: "Sherborne",
    href: `/${slugifyLocation("Sherborne")}`,
    county: "Dorset",
    region: "South West England",
    population: "9958",
  },
  {
    label: "Blandford Forum",
    href: `/${slugifyLocation("Blandford Forum")}`,
    county: "Dorset",
    region: "South West England",
    population: "10700",
  },
];

export const nearbyLocationLinks = LOCATION_METADATA.map(({ label, href }) => ({
  label,
  href,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentHref = currentLocationLabel ? `/${slugifyLocation(currentLocationLabel)}` : "/";
  const filteredNearbyLinks = nearbyLocationLinks.filter((location) => location.href !== currentHref);

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_METADATA.map(({ label }, index) => ({
  index: index + 1,
  label,
  county: LOCATION_METADATA[index]?.county ?? "",
  region: LOCATION_METADATA[index]?.region ?? "",
  slug: slugifyLocation(label),
}));