"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Rental van on a broad rural road near Wimborne Minster with fields and hedgerows",
  };

  return (
    <HomePage
      currentLocationLabel="Wimborne Minster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Wimborne Minster"
      heroDescription="Need dependable vehicle hire in Wimborne Minster? We offer cars, vans, minibuses and trucks for commuter routes, family travel, trade jobs and planned moves."
      serviceAreasTitle="Serving Wimborne Minster and surrounding areas"
      serviceAreasDescription="We cover Wimborne Minster and nearby Dorset routes, making it easy to arrange vehicle hire for local travel, business needs, moving jobs and longer journeys across the county."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Useful vehicle hire advice for Wimborne Minster"
      infoContentSectionIntro="Vehicle hire in Wimborne Minster often needs to fit around both everyday town travel and wider Dorset routes. With quick access towards the A31 and nearby business areas, local customers use our cars, vans, minibuses and trucks for moving jobs, family travel, short-notice transport and business work."
      infoContentBlock1Title="Using the A31 and local routes"
      infoContentBlock1Body="Wimborne Minster sits close to the A31, which makes hired vehicles practical for east-west trips towards Ringwood, Ferndown and the wider Dorset network. If you are collecting furniture, making deliveries or heading out with family, choosing the right size vehicle helps on both town streets and faster dual carriageway sections."
      infoContentBlock2Title="Fuel stops and town-centre timing"
      infoContentBlock2Body="For longer drives, many customers top up near the A31 corridor around the wider Ferndown area before continuing on. In Wimborne itself, town centre roads can be busier around the Minster, market days and school runs, so it helps to allow extra time if you are loading up or returning a vehicle on a weekday."
      infoContentBlock3Title="A practical base for mixed journeys"
      infoContentBlock3Body="Wimborne Minster is a useful base for moves, event travel and day trips into rural Dorset. A minibus can suit family gatherings and group outings, while vans and larger vehicles help with house clearances, trade jobs and planned deliveries without needing multiple cars."
      bottomCtaTitle="Book vehicle hire in Wimborne Minster"
      bottomCtaDescription="Arrange practical vehicle hire in Wimborne Minster for local travel, business journeys, moving work and wider trips across east Dorset."
      secondaryCtaTitle="Talk through your Wimborne Minster booking"
      secondaryCtaDescription="If you already know the vehicle type you need, we can help you arrange hire in Wimborne Minster with straightforward guidance and broad fleet availability."
      faqs={[
        { question: "What types of vehicle hire are available in Lyme Regis?", answer: "We provide access to cars, vans, minibuses and trucks for Lyme Regis bookings, depending on the type of hire you need." },
        { question: "Can you deliver to Lyme Regis?", answer: "Delivery and collection may be available in Lyme Regis, which can help if you are staying locally, managing a property or organising a practical job." },
        { question: "Can I use a Lyme Regis hire vehicle for longer trips?", answer: "Many hires from Wimborne Minster can be arranged with mileage terms that suit longer journeys. Ask about your route and vehicle choice when booking." },
        { question: "Is European travel possible from Lyme Regis?", answer: "Some hires can be arranged for European travel, but this must be agreed before the booking starts." },
        { question: "What do I need to hire a vehicle in Lyme Regis?", answer: "A valid driving licence is needed, and we will confirm any additional requirements based on the vehicle category you choose." },
      ]}
    />
  );
}
