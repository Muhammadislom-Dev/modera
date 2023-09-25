import "./App.css";
import Gallery from "./components/Gallery";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Header from "./components/Header";
import HeaderForm from "./components/HeaderForm";
import Section from "./components/Section";
import Tower from "./components/Tower";
import Layouts from "./components/Layouts";
import Busines from "./components/Busines";
import HeaderModal from "./components/HeaderModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAbout from "./pages/Layout";
import LayoutList from "./pages/LayoutList/LayoutList";
import Loader from "./components/Loader";

function App() {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {loader && <Loader />}
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {open === false ? (
                  <Header open={open} setOpen={setOpen} />
                ) : (
                  <HeaderModal />
                )}
                {open === false ? <HeaderForm /> : ""}
                <Section />
                <Tower />
                <Busines />
                <Layouts />
                <Gallery />
                <Company />
                <Partner />
                <Contact />
              </>
            }
          />
          <Route
            path="/layout/:id"
            element={
              <>
                <LayoutList />
              </>
            }
          />
          <Route
            path="/layout-about/:id"
            element={
              <>
                <LayoutAbout />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
