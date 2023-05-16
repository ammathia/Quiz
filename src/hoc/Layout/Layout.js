import React, {Component} from "react";
import classes from "./Layout.module.scss"



function Layout(props) {

    return(
        <div className={classes.Layout} >
            <main>
           {props.children}
            </main>
        </div>
    )
}


export default Layout;