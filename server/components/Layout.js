import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        const { children, title = "Mintra Blog" } = this.props;
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </Head>
                <Header />
                {children}
                <Footer company="Usernamemint" email="mintrawork1565@gmail.com" />
            </div>
        )
    }
}

export default Layout;