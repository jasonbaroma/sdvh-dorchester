"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Family MPV driving on a road near Wareham with marshy fields and a river crossing area in the distance",
  };

  return (
    <HomePage
      currentLocationLabel="Wareham"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Blandford Forum"
      heroDescription="Vehicle Hire Blandford Forum for business travel, home projects, deliveries and day-to-day driving. Cars, vans, minibuses and trucks available with flexible support."
      serviceAreasTitle="Blandford Forum and nearby coverage"
      serviceAreasDescription="We provide vehicle hire for Blandford Forum and the surrounding Dorset area, supporting private bookings, business transport and one-off carrying jobs."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Making vehicle hire work in Blandford Forum"
      infoContentSectionIntro="In Blandford Forum, vehicle hire is often about getting a practical job done efficiently. That might mean a van for business use, a car for temporary transport, or a larger vehicle for moving goods across Dorset and beyond."
      infoContentBlock1Title="A practical choice for central Dorset travel"
      infoContentBlock1Body="Blandford Forum works well as a starting point for routes across central Dorset, whether you are heading towards Poole, Dorchester or the surrounding villages. Hire can give you the flexibility to cover these journeys without relying on a permanent larger vehicle."
      infoContentBlock2Title="Useful for trade and commercial work"
      infoContentBlock2Body="The area often generates demand for vans and trucks from trades, site teams and independent businesses that need extra capacity at short notice. Short-term hire can be useful when workloads increase or a regular vehicle is off the road."
      infoContentBlock3Title="More capacity for household jobs"
      infoContentBlock3Body="For bigger home projects, garden clearances or local moves, having the right load space can save repeated runs. Choosing between a van, a Luton or a heavier truck depends on access, load type and how much you need to move in one go."
      bottomCtaTitle="Book for Blandford Forum"
      bottomCtaDescription="Tell us what you need in Blandford Forum and we will help arrange a vehicle that suits local journeys, trade work or longer road travel."
      secondaryCtaTitle="Talk through your requirements"
      secondaryCtaDescription="We can help you compare vehicle sizes and hire options if you are not sure what fits your Blandford Forum booking best."
      faqs={[
        { question: "Do you cover Blandford Forum for all vehicle types?", answer: "Yes, we cover Blandford Forum with a broad self-drive range including cars, vans, minibuses and trucks for personal and business bookings." },
        { question: "Is hire suitable for business use in Blandford Forum?", answer: "Business customers often hire vans and trucks for equipment, stock movement and short-term fleet support. We can also help with cars for staff travel where needed." },
        { question: "Can the vehicle be delivered in Blandford Forum?", answer: "In many cases, yes. Delivery and collection can help if your day is built around job sites, loading times or limited staff availability." },
        { question: "Can I arrange one-way hire from Blandford Forum?", answer: "One-way hire may be available depending on the vehicle and route. If you are moving onward or finishing outside the area, ask us when booking." },
        { question: "Are there extra checks for larger vehicles?", answer: "You will need a valid licence and must meet the insurer's requirements. Some hires, especially larger vehicles, may involve additional checks before confirmation." },
      ]}
    />
  );
}
