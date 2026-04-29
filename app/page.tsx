"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Modern hire car on a tree-lined country road in Dorset under soft morning light",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Dorchester"
      heroDescription="Vehicle Hire Dorchester for cars, vans, minibuses and trucks. Flexible self-drive rental for local journeys, business use, home moves and longer UK travel."
      serviceAreasTitle="Vehicle hire across Dorchester and nearby areas"
      serviceAreasDescription="We provide vehicle hire across Dorchester and nearby Dorset towns, with practical support for local journeys, one-way trips, business use and longer-distance travel."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Dorchester journeys"
      infoContentSectionIntro="Hiring a vehicle in Dorchester often comes down to practicality. Local residents, businesses and visitors use self-drive hire for everything from temporary transport and weekend travel to removals, event trips and commercial jobs across Dorset."
      infoContentBlock1Title="Getting around Dorchester and beyond"
      infoContentBlock1Body="Dorchester sits well for journeys across Dorset, whether you are heading towards Weymouth, Bridport, Blandford Forum or the A35 corridor. Hiring locally can be a practical way to handle short-term transport needs without committing to a long-term vehicle."
      infoContentBlock2Title="Useful hire for moving and carrying"
      infoContentBlock2Body="For house moves, furniture collection or business deliveries, having the right size vehicle makes a noticeable difference on rural and town routes alike. Delivery and collection can also save time if you are planning around work, property access or a moving day schedule."
      infoContentBlock3Title="Planning for leisure and longer routes"
      infoContentBlock3Body="Dorchester is also a sensible starting point for coastal trips, group travel and longer drives into the South West. Whether you need a family car, a minibus for shared travel or a truck for heavier work, choosing the right vehicle early helps keep plans simple."
      bottomCtaTitle="Book the right vehicle for your journey"
      bottomCtaDescription="Tell us what you need to move, carry or plan for, and we will help match you with a suitable vehicle and hire arrangement."
      secondaryCtaTitle="Talk through your hire options"
      secondaryCtaDescription="Speak to our team if you want help choosing between car, van, minibus or truck hire in Dorchester and the surrounding area."
      faqs={[
        { question: "What types of vehicles can I hire?", answer: "We offer car hire, van hire, minibus hire and truck hire, with options suited to personal travel, business use, moving jobs and longer distance driving." },
        { question: "Do you offer delivery and collection?", answer: "Yes, free delivery and collection is available in many areas we cover. Availability depends on the vehicle, timing and location, so it is best to ask when booking." },
        { question: "Can I arrange a one-way rental?", answer: "One-way hire is available on selected bookings. If you need to finish your rental in a different place, we can advise on availability and the best way to arrange it." },
        { question: "Can I take a hire vehicle to Europe?", answer: "Yes, some vehicles can be prepared for European travel when agreed in advance. We will confirm whether your chosen vehicle is suitable and what paperwork is required." },
        { question: "What do I need to hire a vehicle?", answer: "You will usually need a valid driving licence and to meet the insurer's hire requirements. For some vehicles or drivers, we may also need additional identification or licence information." },
      ]}
    />
  );
}
