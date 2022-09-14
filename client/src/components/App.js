import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
import Signup from "./signinFolder/Signup";
import Signin from "./signinFolder/Signin";
import DisplayDashboard from "./userFolder/Display/DisplayDashboard";
import EditDisplay from "./userFolder/Display/EditDisplay";
import BetteryDashboard from "./userFolder/Battery/BetteryDashboard";
import EditBattery from "./userFolder/Battery/EditBattery";
import TouchDashboard from "./userFolder/Touch/TouchDashboard";
import EditTouch from "./userFolder/Touch/EditTouch";
import LcdDashboard from "./userFolder/LCD/LcdDashboard";
import EditLcd from "./userFolder/LCD/EditLcd";
import NotFound from "./NotFound";
import UserRoute from "./userFolder/UserRoute";

// import AdminRoute from "./AdminRoute";
//import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Signin} />

          <UserRoute
            exact
            path="/user/dashboard/display"
            component={DisplayDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/display/edit/:id"
            component={EditDisplay}
          />

          <UserRoute
            exact
            path="/user/dashboard/battery"
            component={BetteryDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/battery/edit/:id"
            component={EditBattery}
          />
          <UserRoute
            exact
            path="/user/dashboard/touch"
            component={TouchDashboard}
          />
          <UserRoute
            exact
            path="/user/dashboard/touch/edit/:id"
            component={EditTouch}
          />

          <UserRoute
            exact
            path="/user/dashboard/lcd"
            component={LcdDashboard}
          />

          <UserRoute
            exact
            path="/user/dashboard/lcd/edit/:id"
            component={EditLcd}
          />

          {/* <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          /> */}

          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
