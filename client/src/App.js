import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Driver from "./pages/RideShare/driver/Driver";
import PrivateDriverRoute from "./components/PrivateDriverRoute";
import Passenger from "./pages/RideShare/passenger/Passenger";
import PrivateRoute from "./components/PrivateRoute";
// import Map from "./components/Map";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateDriverRoute exact path="/driver" component={Driver} />
        <PrivateRoute exact path="/passenger" component={Passenger} />
        {/* <PrivateRoute exact path='/map' component={Map} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
