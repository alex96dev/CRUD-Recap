import { useState } from "react";
import GlobalStyle from "../styles";
import { uid } from "uid";
import { useRouter } from "next/router";
import { initialPlaces } from "@/lib/db";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);
  const router = useRouter();

  function handleAddPlace(data) {
    const newPlace = { id: uid(), ...data };

    setPlaces([...places, newPlace]);
    router.push("/");
  }

  // console.log(places);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
