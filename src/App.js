import "./App.css";
import Content  from "./Content";
import {Footer} from "./Footer";
import {Slide}  from "./Slide";
import React, {useState} from "react";

function App() {
  const [animate, setAnimate] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const {slideText, footerText} = Content[pageNumber];
  const isLastPage = pageNumber === Content.length - 1;

  return (
    <main>
      <Slide
        animate={animate}
        content={slideText}
        onAnimationEnd={() => {
          setAnimate(false);
        }}
      />
      <Footer
        content={footerText}
        navigateNext={() => {
          setAnimate(true);
          setPageNumber(isLastPage ? 0 : pageNumber + 1);
        }}
        navigateBack={() => {
          setAnimate(true);
          setPageNumber(pageNumber - 1);
        }}
      />
    </main>
  );
}

export default App;
