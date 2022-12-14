import "./App.css";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

const click = () => {
  Auth.signOut();
  window.location.reload();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample React app</h1>
        <h2>
          <a className="App-link" href="." onClick={click}>
            Sign Out
          </a>
        </h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
