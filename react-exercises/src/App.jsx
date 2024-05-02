import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Counter from "./Counter.jsx";
import UseEffect_example from "./useEffect-example.jsx";
import ComponentA from "./useContext_Example/ComponentA.jsx";
import MyComponent from "./useRef_example/MyComponent.jsx";

function App() {
  return (
    <>
      <MyComponent />
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
