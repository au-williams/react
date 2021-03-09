import "./App.css";
import Content  from "./Content";
import {Footer} from "./Footer";
import {Slide}  from "./Slide";
import React, { useState } from "react";

function App() {
  const [animate, setAnimate] = useState(true);
  const onAnimationEnd = () => setAnimate(false);
  const [pageNumber, setPageNumber] = useState(0);

  const {slideText, footerText} = Content[pageNumber];
  const isLastPage = pageNumber === Content.length - 1;

  return (
    <main>
      <Slide
        animate={animate}
        content={slideText}
        onAnimationEnd={onAnimationEnd}/>
      <Footer
        content={footerText}
        navigateNext={() => {
          setPageNumber(isLastPage ? 0 : pageNumber + 1);
          setAnimate(true);
        }}
        navigateBack={() => {
          setPageNumber(pageNumber - 1);
          setAnimate(true);
        }}
      />
    </main>
  );
}

export default App;
