"use client";
import { useState } from "react";
import { InfoIcon, Search } from "lucide-react";
type SystemType =
  | "all"
  | "non-pressurized"
  | "pressurized-tubes"
  | "pressurized-flatplate";
type Material = "all" | "galvanized" | "stainless";
interface PriceEntry {
  type: string;
  capacity: string;
  material: string;
  price: number;
}
export default function PricingTable() {
  const [selectedType, setSelectedType] = useState<SystemType>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<Material>("all");
  const [searchCapacity, setSearchCapacity] = useState("");
  const priceData: PriceEntry[] = [
    // Non-Pressurized Systems
    {
      type: "non-pressurized",
      capacity: "150 L",
      material: "galvanized",
      price: 72000,
    },
    {
      type: "non-pressurized",
      capacity: "150 L",
      material: "stainless",
      price: 75000,
    },
    {
      type: "non-pressurized",
      capacity: "200 L",
      material: "galvanized",
      price: 88000,
    },
    {
      type: "non-pressurized",
      capacity: "200 L",
      material: "stainless",
      price: 92000,
    },
    {
      type: "non-pressurized",
      capacity: "250 L",
      material: "galvanized",
      price: 98000,
    },
    {
      type: "non-pressurized",
      capacity: "250 L",
      material: "stainless",
      price: 102000,
    },
    {
      type: "non-pressurized",
      capacity: "300 L",
      material: "galvanized",
      price: 110000,
    },
    {
      type: "non-pressurized",
      capacity: "300 L",
      material: "stainless",
      price: 115000,
    },
    {
      type: "non-pressurized",
      capacity: "350 L",
      material: "galvanized",
      price: 130000,
    },
    {
      type: "non-pressurized",
      capacity: "350 L",
      material: "stainless",
      price: 135000,
    },
    // Pressurized Tube Systems
    {
      type: "pressurized-tubes",
      capacity: "150 L",
      material: "galvanized",
      price: 110000,
    },
    {
      type: "pressurized-tubes",
      capacity: "150 L",
      material: "stainless",
      price: 115000,
    },
    {
      type: "pressurized-tubes",
      capacity: "200 L",
      material: "galvanized",
      price: 130000,
    },
    {
      type: "pressurized-tubes",
      capacity: "200 L",
      material: "stainless",
      price: 135000,
    },
    {
      type: "pressurized-tubes",
      capacity: "250 L",
      material: "galvanized",
      price: 145000,
    },
    {
      type: "pressurized-tubes",
      capacity: "250 L",
      material: "stainless",
      price: 150000,
    },
    {
      type: "pressurized-tubes",
      capacity: "300 L",
      material: "galvanized",
      price: 170000,
    },
    {
      type: "pressurized-tubes",
      capacity: "300 L",
      material: "stainless",
      price: 175000,
    },
    {
      type: "pressurized-tubes",
      capacity: "350 L",
      material: "galvanized",
      price: 190000,
    },
    {
      type: "pressurized-tubes",
      capacity: "350 L",
      material: "stainless",
      price: 195000,
    },
    // Pressurized Flatplate Systems
    {
      type: "pressurized-flatplate",
      capacity: "200 L",
      material: "galvanized",
      price: 135000,
    },
    {
      type: "pressurized-flatplate",
      capacity: "200 L",
      material: "stainless",
      price: 140000,
    },
    {
      type: "pressurized-flatplate",
      capacity: "300 L",
      material: "galvanized",
      price: 180000,
    },
    {
      type: "pressurized-flatplate",
      capacity: "300 L",
      material: "stainless",
      price: 185000,
    },
  ];
  const filteredData = priceData.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesMaterial =
      selectedMaterial === "all" || item.material === selectedMaterial;
    const matchesCapacity =
      searchCapacity === "" ||
      item.capacity.toLowerCase().includes(searchCapacity.toLowerCase());
    return matchesType && matchesMaterial && matchesCapacity;
  });
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  return (
    <section className="py-8 bg-background">
      <div className="wrapper px-4">
        <div className="text-center mb-6">
          <h2 className="headline font-bold text-foreground mb-4">
            Solar Water Heater Pricing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="title mx-auto font-semibold text-foreground/70">
            Find the perfect solar water heating system for your needs and
            budget
          </p>
        </div>
        <div className=" wrapper mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              System Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as SystemType)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Types</option>
              <option value="non-pressurized">Non-Pressurized</option>
              <option value="pressurized-tubes">Pressurized Tubes</option>
              <option value="pressurized-flatplate">
                Pressurized Flatplate
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Material
            </label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value as Material)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Materials</option>
              <option value="galvanized">Galvanized Aluminium</option>
              <option value="stainless">Stainless Steel</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Capacity
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search capacity..."
                value={searchCapacity}
                onChange={(e) => setSearchCapacity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md pl-10"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    System Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Material
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.type === "non-pressurized"
                        ? "Non-Pressurized"
                        : item.type === "pressurized-tubes"
                        ? "Pressurized Tubes"
                        : "Pressurized Flatplate"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.capacity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.material === "galvanized"
                        ? "Galvanized Aluminium"
                        : "Stainless Steel"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatPrice(item.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 bg-orange-50 rounded-lg p-6">
          <div className="flex items-start">
            <InfoIcon className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="p-text font-semibold text-foreground/70 mb-2">
                Installation Cost
              </h4>
              <p className="text-gray-700">
                Professional installation service is available for{" "}
                {formatPrice(8000)}. This includes:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• System mounting and secure installation</li>
                <li>• Plumbing connections and testing</li>
                <li>• System configuration and calibration</li>
                <li>• Basic user training and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
