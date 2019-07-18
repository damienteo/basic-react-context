import React, { Component } from "react";

import LanguageContext from "./contexts/languageContext";
import ColorContext from "./contexts/colorContexts";

import UserCreate from "./components/userCreate";
import LanguageSelector from "./components/languageSelector";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <LanguageSelector onLanguageChange={this.onLanguageChange} />
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        {this.state.language}
      </div>
    );
  }
}

export default App;
