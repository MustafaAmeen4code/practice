function ConditionalRender() {
  const isLogedIn = true; // Change this to false to see the other message
  const hasMessage = true; // Change this to false to see the other message
  return (
    <div>
      {/*tenary rendering*/}
      <p>{isLogedIn ? "Welcome back!" : "Please log in."}</p>
      {/*And operator rendering (only show if true)*/}
      {isLogedIn && hasMessage && <p>You have new messages.</p>}
      {/*Hiding something (render nothing)*/}
      {isLogedIn && null}
      {/*Or operator rendering (show if one is true)*/}
    </div>
  );
}

export default ConditionalRender;
