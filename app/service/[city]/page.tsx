import { notFound } from "next/navigation";
import Head from "next/head";
// hello
import {
  Truck,
  Home,
  Briefcase,
  Car,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

interface Props {
  params: { city: string };
}
// hello
export default function CityServicePage({ params }: Props) {
  const { city } = params;

  if (!city) return notFound();

  const formatCityName = (slug: string) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const cityName = formatCityName(city);

  return (
    <>
      <Head>
        <title>{`Movers and Packers in ${cityName} | Karni Movers`}</title>
        <meta
          name="description"
          content={`Top-rated packers and movers service in ${cityName}.`}
        />
      </Head>

      <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
            Trusted Movers and Packers in {cityName}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience hassle-free shifting with{" "}
            <strong>Karni Movers & Packers</strong>. We offer end-to-end
            relocation services in <strong>{cityName}</strong> with precision,
            speed, and care. Our dedicated professionals ensure safe
            transportation of all belongings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Home, title: "Household Shifting" },
            { icon: Briefcase, title: "Office Relocation" },
            { icon: Car, title: "Vehicle Transportation" },
            { icon: ShieldCheck, title: "Packing & Insurance" },
            { icon: Truck, title: "Loading & Unloading" },
            { icon: ClipboardList, title: "Storage & Warehousing" },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <div className="flex items-center gap-4 mb-4">
                <service.icon className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">
                Professional and secure {service.title.toLowerCase()} services
                for all your needs in {cityName}.
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl text-center mb-16">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Ready to move in {cityName}?
          </h3>
          <p className="text-gray-700 mb-4">
            Let Karni Movers and Packers handle everything. From packing to
            delivery, we ensure a smooth and secure transition.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gray-100 p-10 rounded-2xl shadow-inner">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="italic text-gray-600 mb-4">
              “Karni Movers made my home relocation in {cityName} absolutely
              seamless. The team was punctual, professional, and handled
              everything with utmost care. Highly recommended!”
            </p>
            <p className="text-red-600 font-semibold">
              — Ramesh Verma, {cityName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
