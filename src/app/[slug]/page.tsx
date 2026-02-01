import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Navigation, Footer, CTA, Contact } from "@/components";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceFeatures } from "@/components/ServiceFeatures";

// Generate the location-based slug
function getLocationSlug(serviceSlug: string, city: string): string {
  return `${serviceSlug}-${city.toLowerCase().replace(/\s+/g, "-")}`;
}

// Find service by location-based slug
function getServiceBySlug(slug: string) {
  const city = siteConfig.contact.address.city.toLowerCase().replace(/\s+/g, "-");

  for (const service of siteConfig.services) {
    const locationSlug = getLocationSlug(service.slug, siteConfig.contact.address.city);
    if (locationSlug === slug) {
      return { service, city: siteConfig.contact.address.city };
    }
  }
  return null;
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const city = siteConfig.contact.address.city;

  return siteConfig.services.map((service) => ({
    slug: getLocationSlug(service.slug, city),
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getServiceBySlug(slug);

  if (!result) {
    return {
      title: "Service Not Found",
    };
  }

  const { service, city } = result;

  return {
    title: `${service.title} in ${city} | ${siteConfig.company.fullName}`,
    description: `${service.description} Professional ${service.title.toLowerCase()} services in ${city}, ${siteConfig.contact.address.state}.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getServiceBySlug(slug);

  if (!result) {
    notFound();
  }

  const { service, city } = result;

  return (
    <>
      <Navigation />
      <main>
        <ServiceHero service={service} city={city} />
        <ServiceFeatures service={service} city={city} />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
