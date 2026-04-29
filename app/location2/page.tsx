"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "White hire van parked safely on a quiet country lane near Bridport surrounded by hedgerows and fields",
  };

  return (
    <HomePage
      currentLocationLabel="Bridport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Bridport"
      heroDescription="Vehicle Hire Bridport for coastal travel, local moves, business use and group journeys. Self-drive cars, vans, minibuses and trucks arranged to suit your plans."
      serviceAreasTitle="Bridport coverage and surrounding routes"
      serviceAreasDescription="Our coverage includes Bridport and nearby coastal and inland communities, making it easier to arrange hire for everyday travel, deliveries, moves and shared trips."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Vehicle hire that suits the way Bridport journeys work"
      infoContentSectionIntro="Bridport has a different travel rhythm from larger inland towns. People hire here for weekend breaks, family visits, carrying jobs and work journeys that often involve a mix of coast, countryside and market-town driving."
      infoContentBlock1Title="Helpful for coast and market-town travel"
      infoContentBlock1Body="Bridport is a practical place to hire when your plans include local driving as well as routes out towards Lyme Regis, Dorchester or the wider coast. A hire car can be especially useful when public transport does not line up with your timing."
      infoContentBlock2Title="Practical carrying space when you need it"
      infoContentBlock2Body="Van hire is often the straightforward answer for moving furniture, collecting stock or handling equipment for local jobs. Around Bridport, where journeys can mix town access with rural roads, a vehicle that matches the load matters more than sheer size."
      infoContentBlock3Title="Group transport for coastal plans"
      infoContentBlock3Body="For walking groups, family breaks or event travel along the coast, a minibus can keep the journey organised. Instead of arranging several cars, one booking can make arrival times, parking and luggage handling much easier."
      bottomCtaTitle="Plan your Bridport vehicle hire"
      bottomCtaDescription="From local jobs to longer runs out of Dorset, we can help arrange a suitable Bridport hire for work, leisure or practical transport needs."
      secondaryCtaTitle="Compare the right options"
      secondaryCtaDescription="Whether you need extra seats, more load space or a simple car for local travel, we will point you towards a practical option for Bridport."
      faqs={[
        { question: "What can I hire in Bridport?", answer: "Yes, customers in Bridport can book cars, vans, minibuses and trucks, depending on what suits the journey and current vehicle availability." },
        { question: "Can you deliver a vehicle to Bridport?", answer: "Bridport and the surrounding area can often be covered by our delivery and collection service. Let us know your address and preferred times when booking." },
        { question: "Is minibus hire available for group trips from Bridport?", answer: "Minibus hire is often useful for family outings, coastal day trips and event travel where keeping everyone together is easier than using several cars." },
        { question: "Can I take a Bridport hire vehicle abroad?", answer: "Some vehicles can be approved for European travel when arranged in advance. We can confirm suitability, cover and paperwork before the hire starts." },
        { question: "What documents do I need for hire in Bridport?", answer: "A full valid driving licence is normally required, along with any supporting ID or checks needed by the insurer. Requirements can vary by vehicle type." },
      ]}
    />
  );
}
