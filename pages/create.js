import Link from "next/link";
import Form from "@/components/Form";
import styled from "styled-components";

export default function Create({ onAddPlace }) {
  return (
    <>
      <StyledLink href="/">&#x2190; Go back to Homepage</StyledLink>
      <Form onAddPlace={onAddPlace}></Form>
    </>
  );
}

const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: underline;
  color: black;
`;
