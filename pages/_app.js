import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState();

  function handleAddPlace(data) {
    setPlaces([...places, data]);
  }

  console.log(places);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
