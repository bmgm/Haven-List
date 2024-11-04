import React from "react";
import properties from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="container mx-auto px-4 pt-24">
        <h2 className="text-3xl mb-10 text-center font-bold">
          Recent Properties
        </h2>
        {recentProperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {recentProperties.map((property) => (
              <PropertyCard property={property} />
            ))}
          </div>
        )}
      </section>
      <section className="m-auto max-w-md my-12 px-6">
        <Link
          href="/properties"
          className="block bg-orange-600 hover:bg-orange-500 text-white text-center py-2 px-6 rounded-full"
        >
          View all properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
