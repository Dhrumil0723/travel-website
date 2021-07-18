import React from "react";
import Header from "./Components/Header/header";
import TopPart from "./Components/Top-section/TopPart";

const App = () => {
  return (
    <div className="App">
      <div
        style={{
          background: `url(./assets/image.png) no-repeat center center/cover`,
          height: "100vh",
        }}
      >
        <Header />
        <TopPart />
      </div>
    </div>
  );
};

export default App;
