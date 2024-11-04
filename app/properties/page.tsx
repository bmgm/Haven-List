import React from "react";
import properties from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-xl mb-4">Browse Properties</h1>
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertiesPage;
