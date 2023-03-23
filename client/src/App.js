import React from 'react';
import {
  Header,
  Footer,
  Projects,
  AboutMe
} from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
