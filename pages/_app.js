import React from "react";
//import "./style.css"
import "../styles/globals.css";
const App=(props)=>{
    const {Component, pageProps} = props;
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    )

}

export default App;