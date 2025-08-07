function RenderingList() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];
  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {`"${book.title}" by`}
            <span style={{ fontWeight: "bold" }}> {book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingList;
