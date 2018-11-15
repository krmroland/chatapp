import React from "react";

import Messages from "./Messages";
import NewMessage from "./NewMessage";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Messages />
        <NewMessage />
      </div>
    );
  }
}

export default App;
