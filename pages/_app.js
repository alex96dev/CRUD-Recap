import { useState } from "react";
import GlobalStyle from "../styles";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState([]);

  function handleAddPlace(data) {
    const newPlace = { id: uid(), ...data };
    setPlaces([...places, newPlace]);
  }

  console.log(places);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
