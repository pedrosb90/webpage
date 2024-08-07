import React from "react";
import App from "next/app";
import "../styles/fonts.css";
import Layout from "../comps/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
