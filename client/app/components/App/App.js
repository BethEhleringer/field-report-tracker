import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReportForm from '../ReportForm/ReportForm'


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
