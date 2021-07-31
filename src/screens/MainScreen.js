import React from "react";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import HomeScreen from "./HomeScreen";

function MainScreen() {
  return (
    <div>
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default MainScreen;
