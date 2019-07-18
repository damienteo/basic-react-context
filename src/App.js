import React, { Component } from "react";

import { LanguageStore } from "./contexts/languageContext";
import ColorContext from "./contexts/colorContexts";

import UserCreate from "./components/userCreate";
import LanguageSelector from "./components/languageSelector";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
        {this.state.language}
      </div>
    );
  }
}

export default App;
