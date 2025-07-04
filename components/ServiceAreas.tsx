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
  "Sector 83",
  "Sector 84",
  "Sector 85",
  "Sector 86",
  "Sector 88",
  "Sector 89",
  "Sector 90",
  "Sector 91",
  "Sector 92",
  "Sector 93",
  "Sector 94",
  "Sector 95",
  "Sector 99",
  "Sector 102",
  "Sector 103",
  "Sector 104",
  "Sector 105",
  "Sector 106",
  "Sector 107",
  "Sector 108",
  "Sector 109",
  "Sector 110",
  "Sector 111",
  "Sector 112",
  "Sector 113",
  "Sector 114",
  "Sector 115",
  "Sector 116",
  "Sector 117",
  "Sector 118",
  "Sector 119",
  "Sector 120",
  "Rajendra Park",
  "Jharsa",
  "Farrukhnagar",
  "Kadipur",
  "Tikri",
  "Islampur",
  "Behrampur",
  "Chakkarpur",
  "Wazirabad",
  "Kanhai",
  "Sikanderpur",
  "Bhondsi",
  "Basai",
  "Chanderlok",
  "Ashok Vihar Phase 2"
]

const ServiceAreas: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 text-center mb-6">
          Service Areas in Gurgaon
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Karni Movers & Packers offers moving and packing services in these
          key locations of Gurgaon, Haryana.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {gurgaonAreas.map((area) => (
            <li key={area}>
              <Link href={`/service/${area.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="min-w-[400px] p-4 rounded-xl transition duration-200 shadow hover:shadow-lg cursor-pointer">
                  <span className="text-sm text-gray-300 hover:text-white block text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    Packers and Movers in {area}
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
