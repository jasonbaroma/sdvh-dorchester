"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "Modern hatchback crossing a rural bridge near Sturminster Newton beside open meadows",
  };

  return (
    <HomePage
      currentLocationLabel="Sturminster Newton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Wareham"
      heroDescription="Vehicle Hire Wareham for local driving, moving jobs, family trips and practical business transport. Self-drive cars, vans, minibuses and trucks available across the area."
      serviceAreasTitle="Wareham and the wider local area"
      serviceAreasDescription="We cover Wareham and nearby parts of Purbeck, helping customers arrange self-drive hire for local errands, business work, moves and longer trips."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="What to consider when hiring in Wareham"
      infoContentSectionIntro="Vehicle hire in Wareham is often driven by practical local needs: getting around Purbeck, carrying bulky loads, handling short-term transport gaps or organising group travel. The right vehicle can save time and keep local planning much simpler."
      infoContentBlock1Title="Useful for Purbeck and surrounding routes"
      infoContentBlock1Body="Wareham is often used as a base for trips around Purbeck, with journeys that can involve town roads, rural stretches and coastal access. Hiring the right vehicle can make those changing route conditions easier to manage, especially during busy travel periods."
      infoContentBlock2Title="Extra space for property and moving days"
      infoContentBlock2Body="For people moving home, collecting larger items or handling property work, van hire gives you more room without needing to borrow or own a larger vehicle. It is often the simplest solution for one-off practical jobs around the Wareham area."
      infoContentBlock3Title="A better setup for shared outings"
      infoContentBlock3Body="Wareham also suits group travel where families or visitors are planning days out together. A minibus can be a more straightforward option when you want everyone travelling in one vehicle with luggage kept together."
      bottomCtaTitle="Get your Wareham booking started"
      bottomCtaDescription="If you need vehicle hire in Wareham for work, travel or a move, we can help you line up a suitable booking without unnecessary hassle."
      secondaryCtaTitle="Explore suitable vehicle options"
      secondaryCtaDescription="From simple local car hire to larger vans and minibuses, we can help you choose a practical option for your Wareham plans."
      faqs={[
        { question: "What vehicles are available for Wareham?", answer: "Yes, Wareham customers can book from our wider self-drive fleet, including cars, vans, minibuses and trucks, depending on availability." },
        { question: "Is car hire practical for getting around Wareham?", answer: "A car is often a good fit for day trips, family visits and temporary transport around Purbeck and the surrounding Dorset road network." },
        { question: "Can I book a van for a move in Wareham?", answer: "Yes, vans are commonly hired for house moves, collecting bulky items and business deliveries in and around Wareham." },
        { question: "Do you offer vehicle delivery to Wareham?", answer: "Delivery may be possible depending on your address, the vehicle required and your preferred hire time. We can confirm this when you enquire." },
        { question: "Can I use a Wareham hire for a longer trip?", answer: "Some bookings can be arranged for travel beyond the local area, including one-way or longer-distance use. Tell us about your route and we will advise on the best setup." },
      ]}
    />
  );
}
