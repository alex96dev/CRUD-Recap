import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

// const StyledPlaceCard = styled.div`
//   width: 500px;
// `;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  padding: 1rem;
`;

export default function PlaceCard({ image, name, location, id }) {
  console.log({ id });
  return (
    <StyledCardContainer>
      <StyledName>{name}</StyledName>
      <StyledLocation>City: {location}</StyledLocation>
      <StyledImage src={image} width={3000} height={30} alt={name} />
      {/* <StyledLink href={`./places/${id}`}>
        Click here to see more Details...
      </StyledLink> */}
    </StyledCardContainer>
  );
}
const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: underline;
  color: black;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 2rem 2rem;
  border-color: black;
  border: 2.5px dashed black;
  border-radius: 15px;
`;

const StyledName = styled.h2`
  align-self: center;
  margin: 1rem;
  margin-bottom: 0;
`;

const StyledLocation = styled.h3`
  margin: 1rem;
  margin-bottom: 0;
`;
