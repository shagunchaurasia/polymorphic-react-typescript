import "./App.css";
import Text from "./components/Text";
function App() {
  return (
    <div className="App">
      <Text as="h1">This is Heading 1</Text>
      <Text as="h2">This is Heading 2</Text>
      <Text as="h3">This is Heading 3</Text>
      <Text>This is span</Text>
    </div>
  );
}

export default App;
