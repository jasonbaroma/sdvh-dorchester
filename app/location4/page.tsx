"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "Rental SUV on a green lane near Sherborne with stone walls and pasture",
  };

  return (
    <HomePage
      currentLocationLabel="Sherborne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Sherborne"
      heroDescription="Need straightforward vehicle hire in Sherborne? We supply rental cars, vans, minibuses and trucks for rail-linked travel, local business use, moving jobs and longer journeys."
      serviceAreasTitle="Vehicle hire around Sherborne and nearby routes"
      serviceAreasDescription="We serve Sherborne and nearby parts of north-west Dorset, helping with vehicle hire for local journeys, surrounding villages and cross-county travel."
      infoContentSectionKicker="Local driver notes"
      infoContentSectionTitle="Using vehicle hire in Sherborne for travel, moving and business"
      infoContentSectionIntro="Sherborne is a practical place to arrange vehicle hire when you need something suited to market-town driving, nearby village runs, or longer trips across Dorset and Somerset. Whether it is for a move, a delivery, extra passenger space, or temporary business use, hiring in Sherborne gives you more flexibility around the A30 and A303 corridors."
      infoContentBlock1Title="Easy access to the A31 corridor"
      infoContentBlock1Body="Wimborne Minster is well placed for access to the A31, which is one of the key east-west routes through the area. That is useful for journeys towards Ringwood, Ferndown, Bournemouth and the wider Dorset network, especially if you need a vehicle for work travel or timed deliveries."
      infoContentBlock2Title="Balancing town access with load space"
      infoContentBlock2Body="Because Wimborne combines a busy town centre with older streets and regular local traffic, the right vehicle choice can make a real difference. A practical van size is often better for town collections, while larger vehicles may suit jobs that stay mainly on trunk routes and industrial estates."
      infoContentBlock3Title="Keeping local routes efficient"
      infoContentBlock3Body="Fuel and convenience stops are easier to find once you are out on the main roads around Wimborne and towards Ferndown. If you are planning a full day of driving, especially across East Dorset, sorting your route before setting off helps avoid backtracking through busier town sections."
      bottomCtaTitle="Book your Sherborne vehicle hire"
      bottomCtaDescription="For practical vehicle hire in Sherborne, get in touch and we will help arrange a suitable rental for local travel, business use or moving plans."
      secondaryCtaTitle="Get help choosing a vehicle in Sherborne"
      secondaryCtaDescription="Tell us what you need from your Sherborne hire and we will help narrow down the most suitable option for the distance, load or group size."
      faqs={[
        { question: "Is same-day or short-notice hire possible in Sherborne?", answer: "Yes. We can often arrange short-notice vehicle hire in Sherborne, depending on fleet availability and the details of your booking." },
        { question: "What types of vehicles are available to hire in Sherborne?", answer: "Yes, Sherborne customers can hire from a range that includes cars, vans, minibuses and trucks, subject to availability and licence requirements." },
        { question: "Can I arrange one-way vehicle hire from Sherborne?", answer: "Yes, one-way hire may be available from Sherborne depending on the route, vehicle category and return arrangements." },
        { question: "Do you offer van hire in Sherborne for moving or trade use?", answer: "One-way hire can often be arranged depending on the route and vehicle category. Ask when booking so we can confirm availability." },
        { question: "Can I hire a minibus in Sherborne for family or group travel?", answer: "A valid licence is required, and some bookings may involve additional checks. We will keep the process clear before you commit." },
      ]}
    />
  );
}
