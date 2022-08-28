import React, { useRef } from "react";
import "./App.css";
import Text from "./components/Text";

const Emphasis = ({ children }: { children: string | number }) => {
  return (
    <em style={{ backgroundColor: "yellow", color: "black", fontSize: 40 }}>
      {children}
    </em>
  );
};
function App() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="App">
      <Text as="h1" color="yellow" style={{ backgroundColor: "red" }}>
        This is Heading 1
      </Text>
      <Text as="h2">This is Heading 2</Text>
      <Text as="h3">This is Heading 3</Text>
      <Text>This is span</Text>
      <Text as="h5" ref={ref}>
        This is a ref
      </Text>
      <br />
      <Text as={Emphasis}> This is important Emphasis</Text>
    </div>
  );
}

export default App;
