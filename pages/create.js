import Link from "next/link";
import Form from "@/components/Form";

export default function Create({ onAddPlace }) {
  return (
    <>
      <Form onAddPlace={onAddPlace}></Form>
      <Link href="/">Back to Homepage</Link>
    </>
  );
}
