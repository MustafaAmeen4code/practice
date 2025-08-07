function JsInJsx() {
  const user = "Mustafa";
  const age = 36;
  const isLoggedIn = true;
  return (
    <div>
      <p>Hello, {user}! This is a JSX expression.</p>
      <p>You are {age} years old.</p>
      <p>Status: {isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}
export default JsInJsx;
