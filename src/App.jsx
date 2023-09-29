import { useEffect } from "react";

import ResizableContainer from "./components/ResizableContainer";
// import Darkmode from 'darkmode-js';
// new Darkmode().showWidget();
import TopNavbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <TopNavbar />

      <ResizableContainer />
    </>
  );
}

export default App;
