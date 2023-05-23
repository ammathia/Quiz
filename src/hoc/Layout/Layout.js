import React, { useState } from "react";
import classes from "./Layout.module.scss";
import ToggleMenu from "../../components/Navigation/ToggleMenu/ToggleMenu";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
}

export { Layout };
