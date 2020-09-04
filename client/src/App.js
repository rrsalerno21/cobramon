import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Tables from "./pages/Tables";
import QRCodes from "./pages/QRCodes";
import Reviews from "./pages/Reviews";
import Welcome from "./pages/Welcome";
import CustomerChat from "./pages/CustomerChat";
import CustomerReview from "./pages/CustomerReview";
import ThankYou from "./pages/ThankYou";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat/Chat"; 
import Join from "./components/Join/Join"; 



function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <Route exact path="/joinsession" exact component={Join} />
            <Route exact path="/chat" exact component={Chat} />
            {/* TODO: Change to Protected Routes */}
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/tables">
              <Tables />
            </Route>
            <Route exact path="/qrcodes">
              <QRCodes />
            </Route>
            <Route exact path="/reviews">
              <Reviews />
            </Route>

            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/customerchat">
              <CustomerChat />
            </Route>
            <Route exact path="/customerreview">
              <CustomerReview />
            </Route>
            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
            <Route path="/*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
