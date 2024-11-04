import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="shadow-md rounded-xl relative">
        <Image
          src={`/images/properties/${property.images[0]}`}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-auto rounded-t-xl"
        />
        <div className="p-4">
          <div className="mb-5">
            <div className="text-sm text-gray-600">{property.type}</div>
            <h3 className="font-bold">{property.name}</h3>
          </div>
          <h3 className="absolute top-2 right-2 px-2 py-1 bg-white text-orange-600 font-semibold text-sm rounded">
            ₹{property.rates.monthly}/mo
          </h3>
          <div className="flex justify-center gap-4 text-sm text-gray-600 mb-5">
            <div>
              <span className="font-bold">{property.beds}</span> Bed
            </div>
            <div>
              <span className="font-bold">{property.baths}</span> Bath
            </div>
            <div>
              <span className="font-bold">{property.square_feet}</span> sqft
            </div>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex justify-between items-center">
            <div className="text-orange-600 font-medium text-sm">
              {property.location.city},{property.location.state}
            </div>
            <Link href={`/properties/${property._id}`}>
              <Button
                variant="outline"
                size="sm"
                className="text-sm border-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
