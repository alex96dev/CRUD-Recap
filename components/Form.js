import styled from "styled-components";

export default function Form({ onAddPlace }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddPlace(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="mapURL">mapURL:</label>
      <input type="text" id="mapURL" name="mapURL" />
      <label htmlFor="image">Image:</label>
      <input type="text" id="image" name="image" />
      <label htmlFor="description" name="description">
        Description:
      </label>
      <input type="text" id="description" name="description" />
      <br />
      <br />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-color: black;
  border: 2.5px dashed black;
  border-radius: 15px;
  padding: 3rem;
  margin: 3rem;
`;

const StyledButton = styled.button`
  border-color: black;
  border: 1.5px dashed black;
  color: black;
  border-radius: 5px;
  width: 150px;
  align-self: center;
  padding: 10px 10px;
`;
