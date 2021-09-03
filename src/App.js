import TextEditor from "./TextEditor";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Footer from "./Footer";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
