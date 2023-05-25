import React from "react";
import classes from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>There is no such page</h1>
    </div>
  );
};

export { NotFoundPage };
