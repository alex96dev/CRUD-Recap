import { useState } from "react";
import PlaceCard from "@/components/PlaceCard";
import { initialPlaces } from "@/lib/db";
import Link from "next/link";

export default function HomePage({ places }) {
  return (
    <div>
      <Link href="/create">
        <button>Create</button>
      </Link>
      {initialPlaces.map((place) => (
        <PlaceCard
          key={place.id}
          name={place.name}
          location={place.location}
          image={place.image}
        />
      ))}
    </div>
  );
}
