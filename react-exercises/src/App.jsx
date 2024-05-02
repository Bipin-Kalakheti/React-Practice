import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Counter from "./Counter.jsx";
import UseEffect_example from "./useEffect-example.jsx";
import ComponentA from "./useContext_Example/ComponentA.jsx";

function App() {
  return (
    <>
      <ComponentA />
      <UseEffect_example />
      <Card />
      <Student name="Naruto" age={20} isStudent={true} />
      <Student />

      <Counter />
    </>
  );
}

export default App;
