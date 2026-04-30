"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Hire car on a tree-lined rural Dorset road near Dorchester in warm afternoon light",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire in Dorchester"
      heroDescription="Vehicle Hire Dorchester for cars, vans, minibuses and trucks, with practical booking support for personal trips, business use, moving days and longer-distance travel."
      serviceAreasTitle="Vehicle hire across Dorchester and nearby Dorset"
      serviceAreasDescription="From Dorchester we support vehicle hire across nearby Dorset towns and villages, with options for local trips, longer UK travel, business transport and one-way journeys."
      infoContentSectionKicker="Local hire advice"
      infoContentSectionTitle="What to consider when hiring a vehicle in Dorchester"
      infoContentSectionIntro="Hiring a vehicle in Dorchester is often about convenience as much as transport. With busy town streets, surrounding rural roads and strong links to the wider county, the right vehicle can make moving goods, organising group travel or covering a temporary driving need far easier."
      infoContentBlock1Title="Using Dorchester as a practical base"
      infoContentBlock1Body="Dorchester sits on useful routes for travel across Dorset, with the A35 linking west towards Bridport and east towards Poole and Bournemouth, while the A37 gives a direct run north. Hiring locally works well whether you are heading into town, out to surrounding villages or across the county for work."
      infoContentBlock2Title="Making local jobs simpler"
      infoContentBlock2Body="A hire vehicle can make awkward local jobs much easier, especially when collecting furniture, handling a move or covering temporary business transport. Delivery and collection can save time if you are based near Poundbury, Fordington or on nearby industrial and trade premises."
      infoContentBlock3Title="Planning beyond the town"
      infoContentBlock3Body="Dorchester is also a sensible starting point for leisure travel, from family outings to the Jurassic Coast to group transport for events and weekends away. If you need extra seats, more luggage room or a vehicle suited to a longer route, booking the right type in advance keeps the journey straightforward."
      bottomCtaTitle="Book the right vehicle for Dorchester"
      bottomCtaDescription="Tell us what you need to move, carry or plan, and we will help match the right vehicle for the job in Dorchester and beyond."
      secondaryCtaTitle="Need help choosing a vehicle?"
      secondaryCtaDescription="Need something specific for a move, work run or family journey? Speak to us and we will help match the right vehicle for Dorchester and beyond."
      faqs={[
        { question: "What kinds of vehicles can I hire in Dorchester?", answer: "We provide car hire, van hire, minibus hire and truck hire, so you can book for everyday driving, house moves, group travel or heavier transport work." },
        { question: "Do you offer delivery and collection around Dorchester?", answer: "Yes, delivery and collection can often be arranged, which is useful if you want the vehicle brought to your home, workplace or another practical local point." },
        { question: "Can I arrange a one-way vehicle hire?", answer: "Many hires can be arranged as one-way bookings, subject to vehicle type and route. It is best to ask when booking so availability can be confirmed." },
        { question: "Can I take a hire vehicle from Dorchester into Europe?", answer: "Some vehicles are available for European travel by prior agreement. Let us know your destination early so the correct vehicle and documents can be prepared." },
        { question: "What do I need to hire a vehicle?", answer: "You will need a valid driving licence, and the exact requirements may vary by vehicle category. We will confirm what is needed before your hire starts." },
      ]}
    />
  );
}
