import React, { Component } from "react";

import UserCreate from "./components/userCreate";
import LanguageContext from "./contexts/languageContext";
import ColorContext from "./contexts/colorContexts";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:{" "}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        {this.state.language}
      </div>
    );
  }
}

export default App;
