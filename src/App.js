import React from "react";
import Header from "./Components/Header/header";
import TopPart from "./Components/Top-section/TopPart";
import RecPlaces from "./Components/Rec-places/RecPlaces";
import CulturePage from "./Components/Culture-page/CulturePage";
import StoriesSection from "./Components/Stories-section/StoriesSection";

import "./App.css";
import VisitorForm from "./Components/Visitor-Form/VisitorForm";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <div
        style={{
          background: `url(./assets/image.png) no-repeat center center/cover`,
          height: "110vh",
        }}
      >
        <Header />
        <TopPart />
        <RecPlaces />
        <CulturePage />
        <StoriesSection />
        <Blogs />
        <VisitorForm />
      </div>
    </div>
  );
}

export default App;
