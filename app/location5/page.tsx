"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Hire car on a quiet approach road near Wareham with riverside meadows in evening light",
  };

  return (
    <HomePage
      currentLocationLabel="Wareham"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Wareham"
      heroDescription="Looking for flexible vehicle hire in Wareham? We provide cars, vans, minibuses and trucks for town journeys, Purbeck travel, work use and practical moving jobs."
      serviceAreasTitle="Serving Wareham and the wider Purbeck area"
      serviceAreasDescription="We support customers in Swanage and the surrounding Purbeck coast, including routes through Corfe Castle, Wareham, Studland and nearby villages."
      infoContentSectionKicker="Coastal hire guidance"
      infoContentSectionTitle="Vehicle hire in Wareham for Purbeck travel and practical jobs"
      infoContentSectionIntro="Wareham is a useful base for both local errands and wider journeys through Purbeck. Whether you are heading toward Swanage, travelling along the A351, connecting to the A35, or need extra carrying space for a move or work run, hiring the right vehicle in Wareham can make route planning and loading much simpler."
      infoContentBlock1Title="Allowing for the main approach road"
      infoContentBlock1Body="Swanage is reached mainly via the A351 through Corfe Castle and on towards Wareham, so route planning matters more here than in larger inland towns. In summer especially, giving yourself extra time can make collections, drop-offs and onward travel much easier."
      infoContentBlock2Title="Matching the vehicle to coastal conditions"
      infoContentBlock2Body="For local driving, Swanage can involve narrower streets, visitor traffic and busy seafront areas during peak periods. A smaller car or sensibly sized van is often the better choice if you need to park near accommodation, shops or residential roads rather than stay on the main route only."
      infoContentBlock3Title="Useful for visitors and local property needs"
      infoContentBlock3Body="Swanage hires are often linked to holiday travel, walking trips, family visits and coastal activity. Minibuses can help with group outings, while vans are useful for holiday lets, event setup or property jobs around Purbeck. If you are heading back towards Wareham later in the day, check fuel and timing before the busiest traffic windows."
      bottomCtaTitle="Plan your Wareham vehicle hire"
      bottomCtaDescription="Speak to us about vehicle hire in Wareham for local driving, trips to the coast, business transport, moving days and onward travel through Purbeck."
      secondaryCtaTitle="Need help with a Wareham booking?"
      secondaryCtaDescription="If you are not sure what size or type of vehicle suits your Wareham plans, we can talk you through the options clearly."
      faqs={[
        { question: "What can I hire in Swanage?", answer: "Yes, we offer vehicle hire for Swanage with cars, vans, minibuses and trucks available according to need and booking availability." },
        { question: "Is delivery available for Swanage bookings?", answer: "Delivery and collection may be possible in Swanage, which can be useful for holiday accommodation, local homes and business addresses." },
        { question: "Can I use a Swanage hire vehicle outside the local area?", answer: "Many hires are used for travel beyond Swanage, including routes through Wareham and onward across Dorset. One-way options may also be available on request." },
        { question: "Can I take a vehicle from Swanage to Europe?", answer: "Some vehicles can be approved for European travel, but this needs to be arranged before the hire starts." },
        { question: "What do I need to book a hire in Swanage?", answer: "You will need a valid driving licence, and we may need additional details depending on the vehicle type you choose." },
      ]}
    />
  );
}
