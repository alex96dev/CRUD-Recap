import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState();

  function handleAddPlace(data) {
    // setPlaces(...places, place);
    console.log(data);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
