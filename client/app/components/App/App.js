import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const App = ({ children }) => (
  <>
    <Header />

    <main>
    <CssBaseline />
      {children}
    </main>

    <Footer />
  </>
);

export default App;
