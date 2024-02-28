export default function Form({ onAddPlace }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddPlace(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="location">location:</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="mapURL">mapURL:</label>
      <input type="text" id="mapURL" name="mapURL" />
      <label htmlFor="image">image:</label>
      <input type="text" id="image" name="image" />
      <label htmlFor="description" name="description">
        description:
      </label>
      <input type="text" id="description" name="description" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
