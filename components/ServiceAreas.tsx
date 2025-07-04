import Link from "next/link"
import React from "react"

const gurgaonAreas: string[] = [
  "Garhi Harsaru",
  "Manesar",
  "Sohna",
  "Pataudi",
  "Badshahpur",
  "Sector 14",
  "Sector 56",
  "DLF Phase 1",
  "DLF Phase 2",
  "DLF Phase 3",
  "DLF Phase 4",
  "DLF Phase 5",
  "Palam Vihar",
  "MG Road",
  "Golf Course Road",
  "South City 1",
  "South City 2",
  "Sushant Lok Phase 1",
  "Sushant Lok Phase 2",
  "Sushant Lok Phase 3",
  "Sector 15",
  "Sector 21",
  "Sector 23",
  "Sector 29",
  "Sector 31",
  "Sector 37",
  "Sector 45",
  "Sector 46",
  "Sector 47",
  "Sector 49",
  "Sector 50",
  "Sector 51",
  "Sector 52",
  "Sector 53",
  "Sector 57",
  "Sector 60",
  "Sector 61",
  "Sector 62",
  "Sector 63",
  "Sector 65",
  "Sector 67",
  "Sector 70A",
  "Sector 71",
  "Sector 73",
  "Sector 76",
  "Sector 80",
  "Sector 82",
  "New Gurgaon",
  "Vatika India Next",
  "Nirvana Country",
]

const ServiceAreas: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 text-center mb-6">
          Service Areas in Gurgaon
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Karni Movers & Packers offers moving and packing services in these
          key locations of Gurgaon, Haryana.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {gurgaonAreas.map((area) => (
            <li key={area}>
              <Link
                href={`/service/${area.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-colors">
                  <span className="text-gray-300 hover:text-white cursor-pointer">
                    {area}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServiceAreas
