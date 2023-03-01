import routes from "./config";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const RoutePage = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={""}>
          {routes.map((item) => (
            <Route
              exact
              key={String(item.path)}
              path={item.path}
              component={item.component}
            ></Route>
          ))}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default RoutePage;
