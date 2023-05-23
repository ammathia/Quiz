import React, { Component, useState } from "react";
import classes from "./Layout.module.scss";
import ToggleMenu from "../../components/Navigation/ToggleMenu/ToggleMenu";
import Drawer from "../../components/Navigation/Drawer/Drawer";

function Layout(props) {
  const [state, setState] = useState({
    menu: false,
  });
  const onToggleHandler = () => {
    setState({ menu: !state.menu });
  };
  const onClose = () => {
    setState({ menu: false });
  };

  return (
    <div className={classes.Layout}>
      <Drawer onClose={onClose} isOpen={state.menu} />
      <ToggleMenu isOpen={state.menu} onToggle={onToggleHandler} />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
