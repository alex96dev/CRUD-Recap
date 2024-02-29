import PlaceCard from "@/components/PlaceCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailPage({ places, setPlaces }) {
  const router = useRouter();
  const { id } = router.query;

  const [foundPlace, setFoundPlace] = useState(places[1]);
  // console.log(hi);
  useEffect(() => {
    //   if (id && places) {

    setFoundPlace(places.find((place) => place.id === id));
    //   setPlaces(foundPlace);
    //   }
  }, [id, places]);
  console.log(foundPlace);

  return (
    <div>
      <h1>{id}</h1>
      <PlaceCard
        key={foundPlace.id}
        name={foundPlace.name}
        location={foundPlace.location}
        image={foundPlace.image}
      />
    </div>
  );
}
