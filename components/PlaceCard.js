import Image from "next/image";
import styled from "styled-components";

const StyledPlaceCard = styled.div`
  width: 500px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function PlaceCard({ image, name, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{location}</h2>
      <StyledImage src={image} width={3000} height={30} alt={name} />
    </div>
  );
}
