"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Premium rental SUV parked on a quiet tree-lined road near Sherborne with stone walls and greenery",
  };

  return (
    <HomePage
      currentLocationLabel="Sherborne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Wimborne Minster"
      heroDescription="Vehicle Hire Wimborne Minster for commuting, family travel, deliveries, removals and business transport. Self-drive cars, vans, minibuses and trucks arranged to fit your plans."
      serviceAreasTitle="Serving Sherborne and nearby routes"
      serviceAreasDescription="We cover Sherborne and the surrounding area, making it easy to arrange car, van, minibus or truck hire for local journeys, business travel and longer trips beyond North Dorset."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Vehicle hire that suits everyday trips around Sherborne"
      infoContentSectionIntro="In Wimborne Minster, vehicle hire often supports the everyday balance between commuting, local business activity and home projects. People hire here when they need more seats, more carrying room or simply a reliable vehicle for a set period."
      infoContentBlock1Title="Well suited to regular local travel"
      infoContentBlock1Body="Wimborne Minster is well placed for journeys towards Poole, Bournemouth and the wider Dorset road network, so hire is often used when people need a flexible vehicle for work travel or short-term day-to-day use."
      infoContentBlock2Title="Helpful backup for business transport"
      infoContentBlock2Body="For trades and small businesses, hiring a van or truck can help cover busy periods, extra jobs or temporary vehicle downtime. That added flexibility is useful when schedules change and extra capacity is needed quickly."
      infoContentBlock3Title="Ideal for one-off home tasks"
      infoContentBlock3Body="Household hires are also common around Wimborne Minster, especially for furniture collection, clear-outs and moving days. Having the right vehicle for one or two days can be far more practical than trying to work around a standard car."
      bottomCtaTitle="Arrange hire in Wimborne Minster"
      bottomCtaDescription="We can help organise a suitable hire for your Wimborne Minster journey, whether you need everyday transport, extra load space or a larger vehicle."
      secondaryCtaTitle="Ready to sort the details?"
      secondaryCtaDescription="If you already know your dates or vehicle type, we can help you arrange a straightforward booking for Sherborne and nearby villages."
      faqs={[
        { question: "Do you provide vehicle hire in Wimborne Minster?", answer: "Yes, we support vehicle hire in Wimborne Minster for personal and business bookings, with cars, vans, minibuses and trucks available subject to scheduling and fleet availability." },
        { question: "Can I hire a car for everyday use around Wimborne Minster?", answer: "Many customers use cars for commuting, family travel and temporary replacement transport, especially when they need flexibility around local Dorset routes." },
        { question: "Is van hire available for work and moving jobs?", answer: "Yes, van hire is a practical option for trades, furniture collection, local deliveries and house moves in the Wimborne Minster area." },
        { question: "Can I return the vehicle somewhere else?", answer: "One-way hire can often be arranged depending on the route and vehicle type. This can be useful if your journey finishes outside Wimborne Minster." },
        { question: "What do I need before booking in Wimborne Minster?", answer: "Hire requirements vary by vehicle, but you will generally need a valid licence and to pass the usual insurance checks before the booking is confirmed." },
      ]}
    />
  );
}
