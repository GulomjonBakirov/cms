import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import "antd/dist/antd.css";
import "./style/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Messenger from "./pages/Messenger";
import Attendance from "./pages/Attendance";
import Calendar from "./pages/Calendar2";
import Settings from "./pages/Settings";
import Database from "./pages/Database";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="Feed">
          <Switch>
            <Route path="/" exact={true}>
              <Dashboard />
            </Route>
            <Route path="/messenger" exact={true}>
              <Messenger />
            </Route>
            <Route path="/attendance" exact={true}>
              <Attendance />
            </Route>
            <Route path="/calendar" exact={true}>
              <Calendar />
            </Route>
            <Route path="/settings" exact={true}>
              <Settings />
            </Route>
            <Route path="/database" exact={true}>
              <Database />
            </Route>
          </Switch>
        </div>
        <Rightbar />
      </div>
    </Router>
  );
}

export default App;
