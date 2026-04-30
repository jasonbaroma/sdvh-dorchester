"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Rental van near Weymouth waterfront with harbour buildings and boats in the distance",
  };

  return (
    <HomePage
      currentLocationLabel="Weymouth"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Weymouth"
      heroDescription="Looking for straightforward vehicle hire in Weymouth? We offer cars, vans, minibuses and trucks for seafront stays, local errands, moving days and business travel."
      serviceAreasTitle="Vehicle hire across Weymouth and the coast"
      serviceAreasDescription="We cover Weymouth and the surrounding coastal area, helping customers arrange hire for local travel, holiday logistics, work use and inland routes across Dorset."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire in Weymouth for coast, family and business use"
      infoContentSectionIntro="Weymouth is a practical place to arrange vehicle hire when you need extra space, extra seats or a dependable work vehicle close to town. With regular local traffic around the seafront, Radipole and the A354, having the right car, van, minibus or truck can make coastal trips, home moves, deliveries and business journeys far easier to manage."
      infoContentBlock1Title="A strong base for working routes"
      infoContentBlock1Body="Blandford Forum sits on the A350, giving direct access towards Poole and Shaftesbury, while the A354 helps with routes towards Salisbury and the south of the county. That makes local hire a practical option for trade work, site visits and planned collections where timing matters."
      infoContentBlock2Title="Useful for rural and trade jobs"
      infoContentBlock2Body="For van and truck users, Blandford Forum is well suited to loads moving between rural properties, local businesses and nearby market towns. Wider roads around the town help, but if you are heading into smaller villages or farm access points, choosing the right vehicle size can save time and hassle."
      infoContentBlock3Title="Planning longer drives from town"
      infoContentBlock3Body="Fuel and everyday travel stops are straightforward around Blandford Forum, especially on the main route corridors. If you are booking for longer distances, it is worth planning ahead for breaks before heading further into Dorset’s more rural stretches where services are more spread out."
      bottomCtaTitle="Arrange your Weymouth hire"
      bottomCtaDescription="Get the right vehicle hire in Weymouth for seafront travel, family trips, business use, removals and wider journeys across Dorset and beyond."
      secondaryCtaTitle="Talk through your Weymouth booking"
      secondaryCtaDescription="Tell us what you need in Weymouth and we will help match you with a suitable rental vehicle for the journey, job or event ahead."
      faqs={[
        { question: "Can I book a rental vehicle quickly in Weymouth?", answer: "Yes. We can often help with short-notice vehicle hire in Weymouth, depending on availability and the type of vehicle required." },
        { question: "Are longer trips from Weymouth possible with your hire vehicles?", answer: "Yes, many Weymouth hires can include options for longer mileage or extended travel plans. Availability depends on the vehicle and hire details." },
        { question: "Do you provide van hire in Weymouth for moving furniture or equipment?", answer: "Many hires can be used for travel across Dorset and further afield in the UK. If you need a one-way booking, ask in advance so we can check the route." },
        { question: "Can I hire a minibus in Weymouth for group travel?", answer: "Some bookings can include European travel, but this must be agreed before departure so the vehicle and paperwork can be set up correctly." },
        { question: "Is one-way hire available from Weymouth?", answer: "You will need a valid licence, and the exact checks depend on the vehicle you choose. We will confirm the details during the booking process." },
      ]}
    />
  );
}
