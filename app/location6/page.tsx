"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Clean crossover hire vehicle driving on a damp country road outside Blandford Forum after light rain",
  };

  return (
    <HomePage
      currentLocationLabel="Blandford Forum"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Blandford Forum"
      heroDescription="Vehicle Hire Blandford Forum for practical local journeys, business use, moves and longer road trips with cars, vans, minibuses and trucks available."
      serviceAreasTitle="Covering Blandford Forum and surrounding Dorset"
      serviceAreasDescription="We support Blandford Forum and nearby Dorset villages with flexible vehicle hire for private customers, trades, businesses and group travel."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="How vehicle hire fits Blandford Forum travel"
      infoContentSectionIntro="Blandford Forum is well placed for both town-based journeys and wider travel across North Dorset and beyond. That makes vehicle hire a useful option for everything from family transport to business work, event travel and property moves."
      infoContentBlock1Title="A practical base for Dorset travel"
      infoContentBlock1Body="Blandford Forum works well as a starting point for journeys across Dorset, whether you are heading towards Poole, Salisbury or smaller rural destinations. Hiring the right vehicle can make local deliveries, home moves and longer drives much easier to plan."
      infoContentBlock2Title="Useful options for work and moving jobs"
      infoContentBlock2Body="If you are moving furniture, collecting stock or covering trade work, choosing the right size van or truck saves time on narrow roads and repeat trips. We can also help with cars for day-to-day travel and minibuses for group transport."
      infoContentBlock3Title="Straightforward hire arrangements"
      infoContentBlock3Body="Delivery and collection can be especially useful in a market town where people want to avoid extra journeys before the hire even starts. Once your booking is confirmed, we help keep the process clear and straightforward."
      bottomCtaTitle="Book vehicle hire in Blandford Forum"
      bottomCtaDescription="Tell us what you need for Blandford Forum and we will help match the right vehicle for personal use, deliveries, moving jobs or group travel."
      secondaryCtaTitle="Need help choosing a vehicle?"
      secondaryCtaDescription="Speak to us if you want to compare vehicle options, confirm availability or arrange a booking that works around your route."
      faqs={[
        { question: "Can you deliver a hire vehicle to Blandford Forum?", answer: "Yes, delivery and collection can often be arranged in Blandford Forum, subject to vehicle type and booking details." },
        { question: "What types of vehicles can I hire in Blandford Forum?", answer: "We supply a broad range including cars, vans, minibuses and trucks, so we can usually help with anything from a short local hire to a larger transport job." },
        { question: "Is one-way vehicle hire available from Blandford Forum?", answer: "One-way hire is available on selected bookings, depending on the route and the vehicle required." },
        { question: "Is insurance included with the hire?", answer: "Many hires include insurance as part of the package. The exact cover depends on the vehicle and booking, so we confirm the details when you enquire." },
        { question: "Can I arrange European travel with a Blandford Forum hire vehicle?", answer: "Yes, some vehicles can be taken to Europe by prior arrangement. Let us know your plans in advance so we can confirm availability and documents." },
      ]}
    />
  );
}
