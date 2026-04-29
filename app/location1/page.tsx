"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpg",
    alt: "Compact hire car travelling on a road toward a coastal Weymouth-style harbour setting",
  };

  return (
    <HomePage
      currentLocationLabel="Weymouth"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Sherborne"
      heroDescription="Vehicle Hire Sherborne for local travel, family journeys, moving jobs and commercial use. Choose from cars, vans, minibuses and trucks with practical booking support."
      serviceAreasTitle="Serving Sherborne and nearby areas"
      serviceAreasDescription="We support hires in Sherborne and surrounding villages, with flexible options for local driving, cross-county trips, removals and commercial transport."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="How vehicle hire works well in Sherborne"
      infoContentSectionIntro="Sherborne combines day-to-day local travel with regular journeys out towards Yeovil, Dorchester and the wider rural area. That makes vehicle hire a practical option for residents, visitors and businesses who need extra flexibility without owning a larger vehicle full time."
      infoContentBlock1Title="Travel that fits around daily plans"
      infoContentBlock1Body="Sherborne is well placed for journeys into both Dorset and Somerset, so hire is often used for flexible day trips, family visits and temporary replacement transport. A suitable car can make local and cross-county travel much easier to manage."
      infoContentBlock2Title="A sensible base for van hire"
      infoContentBlock2Body="With its mix of town streets, surrounding villages and residential moves, Sherborne often sees demand for vans that can handle furniture, boxes and trade equipment without needing multiple trips. Picking the right van size helps keep the day on schedule."
      infoContentBlock3Title="Shared travel made simpler"
      infoContentBlock3Body="Group travel is another common reason to hire around Sherborne, especially for events, family gatherings and shared weekend plans. A minibus gives everyone one vehicle to work around instead of trying to coordinate separate cars."
      bottomCtaTitle="Arrange your Sherborne hire"
      bottomCtaDescription="If you need a vehicle in Sherborne for travel, transport or a planned move, we can help you arrange a suitable hire with clear booking support."
      secondaryCtaTitle="Need help picking a vehicle?"
      secondaryCtaDescription="Speak to our team if you want help choosing between a car, van, minibus or truck for your Sherborne journey."
      faqs={[
        { question: "Can I book more than just cars in Sherborne?", answer: "Yes, we can support customers in Sherborne with a wide range of self-drive vehicles, including cars, vans, minibuses and trucks, subject to availability and booking details." },
        { question: "Do you deliver hire vehicles to Sherborne?", answer: "Delivery may be available in and around Sherborne depending on the vehicle and timing of your booking. Ask when you enquire and we will confirm the practical options." },
        { question: "Is van hire useful for moving in Sherborne?", answer: "Many customers use van hire for moves, furniture collection and business carrying jobs. We can help you choose a size that suits the load and the route." },
        { question: "Can I start in Sherborne and return elsewhere?", answer: "Yes, one-way hire can often be arranged if you need to finish your journey elsewhere. This is useful for longer relocations or trips that do not naturally return to Sherborne." },
        { question: "What is needed to hire a vehicle in Sherborne?", answer: "You will usually need a full valid driving licence and to meet the insurer's criteria. Some hires may also require extra ID or licence checks before collection or delivery." },
      ]}
    />
  );
}
