"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Rental van on an open country road near Blandford Forum with rolling Dorset fields",
  };

  return (
    <HomePage
      currentLocationLabel="Blandford Forum"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Blandford Forum"
      heroDescription="Need reliable vehicle hire in Blandford Forum? We provide flexible car, van, minibus and truck rental for country routes, trade work, moving jobs and day-to-day travel."
      serviceAreasTitle="Covering Blandford Forum and surrounding Dorset roads"
      serviceAreasDescription="Our service reaches across Blandford Forum and nearby Dorset villages, supporting local residents, businesses and visitors with flexible vehicle hire."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Vehicle hire in Blandford Forum for rural routes and working days"
      infoContentSectionIntro="Blandford Forum sits in a useful position for drivers heading across central Dorset and into surrounding rural areas. Hiring a vehicle here works well for trade jobs, village deliveries, home moves and longer journeys using the A350 corridor, especially when your own vehicle is too small or not suited to the work."
      infoContentBlock1Title="Good onward access from Sherborne"
      infoContentBlock1Body="Sherborne sits close to the A30 and not far from the A303 corridor, giving useful access for journeys towards Yeovil, Shaftesbury, Salisbury and the South West. That makes it a practical place to hire when you need flexible travel beyond a short local run."
      infoContentBlock2Title="Town-centre access and vehicle size"
      infoContentBlock2Body="The town’s historic centre can be tighter to navigate than newer road layouts, so vehicle choice matters. If you are loading up near older streets, schools or central properties, a manageable van or car can be more practical than going larger than you need."
      infoContentBlock3Title="Popular reasons to hire locally"
      infoContentBlock3Body="Sherborne hires are often linked to family visits, student moves, events and countryside travel. Nearby destinations such as Yeovil and the wider Blackmore Vale area are common routes, and extra luggage room or more seats can make those trips much easier to organise."
      bottomCtaTitle="Start your Blandford Forum booking"
      bottomCtaDescription="Choose practical vehicle hire in Blandford Forum for town driving, rural deliveries, business travel and planned moves across Dorset."
      secondaryCtaTitle="Need the right vehicle for Blandford Forum?"
      secondaryCtaDescription="If you are weighing up the best rental option in Blandford Forum, our team can help you choose a vehicle that suits the route and the job."
      faqs={[
        { question: "Can I get a hire vehicle quickly in Blandford Forum?", answer: "Yes. We can help arrange vehicle hire in Blandford Forum at short notice when suitable vehicles are available and the booking checks are complete." },
        { question: "Do you offer one-way vehicle hire from Blandford Forum?", answer: "Yes, one-way hire may be available from Blandford Forum depending on the route, vehicle type and where the vehicle will be returned." },
        { question: "What vehicles can I hire in Blandford Forum?", answer: "We offer a broad range including cars, vans, minibuses and trucks, so Blandford Forum customers can hire for personal use, business needs or moving work." },
        { question: "Is van hire in Blandford Forum suitable for house moves and furniture collection?", answer: "Some vehicles can be taken into Europe with prior approval. Let us know before booking so we can advise on suitability and paperwork." },
        { question: "Can businesses in Blandford Forum arrange regular rental vehicles?", answer: "A valid driving licence is required, and the exact documentation can vary by vehicle type. We will confirm what is needed before the hire begins." },
      ]}
    />
  );
}
