import React from 'react';

const ThemeContext = React.createContext('light');

const TextContext = React.createContext('login');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={'dark'}>
        <TextContext.Provider value={'logout'}>
          <Toolbar></Toolbar>
        </TextContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

class ThemedButton extends React.Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          { value => <button>{value}</button>}
        </ThemeContext.Consumer>
        <TextContext.Consumer>
          { value => <button>{value}</button>}
        </TextContext.Consumer>
      </div>
    );
  }
}

export default App;
