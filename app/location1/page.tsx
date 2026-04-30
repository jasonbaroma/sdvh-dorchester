"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Modern rental van on a quiet rural lane near Bridport surrounded by Dorset farmland",
  };

  return (
    <HomePage
      currentLocationLabel="Bridport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Bridport"
      heroDescription="Need dependable vehicle hire in Bridport? We supply cars, vans, minibuses and trucks for everyday travel, coastal routes, business jobs and planned moves."
      serviceAreasTitle="Serving Bridport and nearby West Dorset areas"
      serviceAreasDescription="Our Bridport coverage includes the town itself and surrounding West Dorset routes, making it easy to arrange hire for local driving, coastal journeys and nearby villages."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Hiring a vehicle in Bridport for coast, work and everyday trips"
      infoContentSectionIntro="Bridport is well placed for practical vehicle hire, whether you are moving between town and surrounding villages, collecting bulky items, heading along the A35, or organising group travel toward West Bay and the wider Dorset coast. A flexible rental helps when your own vehicle is too small, unavailable, or simply not the right fit for the job."
      infoContentBlock1Title="Road links around Wareham"
      infoContentBlock1Body="Wareham is well placed for local and cross-county travel, with the A351 running towards Poole and Swanage and the A352 linking back towards Dorchester. That makes it a useful pickup point if you need a car for day trips, a van for collections or a larger vehicle for planned routes across Purbeck."
      infoContentBlock2Title="Fuel stops and busy periods"
      infoContentBlock2Body="If you are setting off from Wareham, you will find fuel options on the main routes out of town and wider services as you head towards Poole. For longer runs, it is worth planning around seasonal traffic, especially in summer when routes towards Corfe Castle and Swanage can get busy."
      infoContentBlock3Title="Choosing the right vehicle for Purbeck travel"
      infoContentBlock3Body="Wareham hires often suit a mix of practical and leisure use. Some customers need a van for household jobs or storage moves, while others book cars or minibuses for access to Studland, Swanage or walking routes across the Isle of Purbeck. Choosing the right size early helps on narrower local roads and village parking spots."
      bottomCtaTitle="Book vehicle hire in Bridport"
      bottomCtaDescription="Speak to our team for practical vehicle hire in Bridport, with flexible rental options for local trips, coastal journeys, business use and moving jobs."
      secondaryCtaTitle="Need advice before you book in Bridport?"
      secondaryCtaDescription="If you are comparing options for Bridport, we can help you choose a suitable car, van, minibus or truck without overcomplicating the booking."
      faqs={[
        { question: "Can I arrange vehicle hire in Bridport at short notice?", answer: "Yes. We can arrange vehicle hire for Bridport customers, subject to vehicle availability, driver checks and the type of hire you need." },
        { question: "Is one-way vehicle hire available from Bridport?", answer: "Yes, one-way hire can often be arranged for Bridport bookings depending on the vehicle category, route and return location." },
        { question: "Do you offer mileage options for longer journeys from Bridport?", answer: "Many hires from Bridport can include mileage terms suited to longer trips. It depends on the vehicle and booking details, so ask when you enquire." },
        { question: "What kinds of vehicles can I hire in Bridport?", answer: "That depends on the vehicle type and your plans. If you need to travel beyond the UK, ask before booking so we can confirm what is possible." },
        { question: "Can I hire a vehicle in Bridport for a house move or delivery run?", answer: "A valid driving licence is required, and some hires may need extra checks depending on the vehicle category. We will explain everything clearly before confirmation." },
      ]}
    />
  );
}
