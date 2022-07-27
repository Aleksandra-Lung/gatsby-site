import React from "react";
import Header1 from "./header1";
import Footer from "./footer";

function Wrapper (props) {
    return (
        <div style={{ 
            margin: "0 auto",
            maxWidth: "100%",
            padding: "0px 0px 0px",
            paddingTop: 0,
            }} >
            {props.children}
        </div>
    )
}

function Layout(props) {
    return (
        <>
            <Header1 />
            <Wrapper>
                <main>{props.children}</main>
                <Footer />
            </Wrapper>
        </>
    )
}

export default Layout