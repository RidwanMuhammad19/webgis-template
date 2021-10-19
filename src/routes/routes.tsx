import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "~/pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePages} />
      </Switch>
    </Router>
  );
};

export default Routes;
