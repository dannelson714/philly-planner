import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Dinner from "./pages/Components/dinner";
// import NavBar from "./pages/Components/navbar";
import Display from "./pages/Components/display";
import Cal from "./pages/Components/calendar";
import Home from "./pages/Components/homepage";
import Create from "./pages/Components/create";
import Login from "./pages/Components/Login";
import Signup from "./pages/Components/Signup";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <NavBar /> */}
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Cal />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/display" element={<Display />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
