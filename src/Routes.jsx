import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Cover = React.lazy(() => import("pages/Cover"));
const StyleGuide = React.lazy(() => import("pages/StyleGuide"));
const CharactersThree = React.lazy(() => import("pages/CharactersThree"));
const CharactersFour = React.lazy(() => import("pages/CharactersFour"));
const Characters = React.lazy(() => import("pages/Characters"));
const CharactersTwo = React.lazy(() => import("pages/CharactersTwo"));
const CharactersOne = React.lazy(() => import("pages/CharactersOne"));
const CharactersFive = React.lazy(() => import("pages/CharactersFive"));
const Cards = React.lazy(() => import("pages/Cards"));
const UIControls = React.lazy(() => import("pages/UIControls"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/uicontrols" element={<UIControls />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/charactersfive" element={<CharactersFive />} />
          <Route path="/charactersone" element={<CharactersOne />} />
          <Route path="/characterstwo" element={<CharactersTwo />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/charactersfour" element={<CharactersFour />} />
          <Route path="/charactersthree" element={<CharactersThree />} />
          <Route path="/styleguide" element={<StyleGuide />} />
          <Route path="/cover" element={<Cover />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
