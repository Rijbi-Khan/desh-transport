import React from "react";

import { Routes, Route } from "react-router-dom";


import LandingPage from "./LandingPage";

import AuthPage from "./AuthPage";

import TripList from "./TripList";

import DriverDashboard from "./DriverDashboard";

import AdminDashboard from "./AdminDashboard";

import AdminLogin from "./AdminLogin";





function App(){


return(


<Routes>




<Route

path="/"

element={<LandingPage />}

/>






<Route

path="/login"

element={<AuthPage />}

/>







<Route

path="/trips"

element={<TripList />}

/>







<Route

path="/driver"

element={<DriverDashboard />}

/>








<Route

path="/admin-login"

element={<AdminLogin />}

/>








<Route

path="/admin"

element={<AdminDashboard />}

/>






</Routes>


);


}



export default App;