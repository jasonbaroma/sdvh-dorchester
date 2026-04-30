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
  population: "21366",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Bridport",
    href: `/${slugifyLocation("Bridport")}`,
    county: "Dorset",
    region: "South West England",
    population: "8621",
  },
  {
    label: "Weymouth",
    href: `/${slugifyLocation("Weymouth")}`,
    county: "Dorset",
    region: "South West England",
    population: "53106",
  },
  {
    label: "Blandford Forum",
    href: `/${slugifyLocation("Blandford Forum")}`,
    county: "Dorset",
    region: "South West England",
    population: "10520",
  },
  {
    label: "Sherborne",
    href: `/${slugifyLocation("Sherborne")}`,
    county: "Dorset",
    region: "South West England",
    population: "9956",
  },
  {
    label: "Wareham",
    href: `/${slugifyLocation("Wareham")}`,
    county: "Dorset",
    region: "South West England",
    population: "5747",
  },
  {
    label: "Wimborne Minster",
    href: `/${slugifyLocation("Wimborne Minster")}`,
    county: "Dorset",
    region: "South West England",
    population: "14916",
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

export { mainLocationMetadata };
