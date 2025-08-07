function AttributesAndStyles() {
  const imageUrl = "https://placekittens.com/g/200/300"; // URL of a cute kitten image
  const link = "https://chat.openai.com/";
  const dynamicColor = "#e3f2fd"; // This can be dynamically set based on some condition
  const boxStyle = {
    border: "2px solid black",
    padding: "10px",
    backgroundColor: dynamicColor, // soft light gray
    borderRadius: "10px",
    color: "black",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div>
      {/*attribute example*/}
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit ChatGPT
      </a>
      {/*class name example*/}
      <p className="my-paragraph">This is a paragraph with a class name.</p>
      {/*inline style example*/}
      <div style={boxStyle}>
        <h3>this box has inline styles</h3>
        <img
          src={imageUrl}
          alt="A cute kitten"
          title="Kitten Image"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            display: "block",
            margin: "0 auto",
          }}
        />{" "}
      </div>
    </div>
  );
}

export default AttributesAndStyles;
