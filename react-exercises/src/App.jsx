import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <Card />
      <Student name="Naruto" age={20} isStudent={true} />
      <Student />

      <Counter />
    </>
  );
}

export default App;
