import React, { Component } from "react";
import LanguageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContexts";

class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {({ language }) =>
                  language === "english" ? "Submit" : "Voorleggen"
                }
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
