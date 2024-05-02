import Card from "./Card.jsx";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Card />
      <Student name="Naruto" age={20} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
