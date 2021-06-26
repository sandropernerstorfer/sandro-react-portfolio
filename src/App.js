import React from "react";
// Global Styling
import GlobalStyles from './GlobalStyles';
// Pages
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <GlobalStyles/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
      <ProjectDetails/>
    </>
  );
};

export default App;