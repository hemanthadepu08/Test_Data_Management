import "./styles.css";
import { LoginPage } from "./LoginPage.js";
import { Switch, Route } from "react-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">Test Data Management</div>
      </Route>
    </Switch>
  );
}
export default App;
