
const Books = () => (
  <section className="book-list-container">
    <section className="book-list">
      <ItemBook
        title="Le Petit Prince"
        author="Antoine de Saint-Exupéry"
        categories="Novel"
      />
      <ItemBook
        title="The Winter King"
        author="Bernard Cornwell"
        categories="Historical Ficticion"
      />
      <ItemBook
        title="The Silmarillion"
        author="J. R. R. Tolkien"
        categories="Fantasy"
      />
    </section>
    <Form />
  </section>
);

export default Books;
