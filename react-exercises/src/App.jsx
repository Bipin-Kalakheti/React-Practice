import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Counter from "./Counter.jsx";
import UseEffect_example from "./useEffect-example.jsx";

function App() {
  return (
    <>
      <UseEffect_example />
      <Card />
      <Student name="Naruto" age={20} isStudent={true} />
      <Student />

      <Counter />
    </>
  );
}

export default App;
