import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';

import { fetchSmurfs } from './actions';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({ isLoading, error, dispatch })=> {

  useEffect(() => {
    fetchSmurfs();
  }, []);

  if (error) {
    return <h2>There was an error: {error}</h2>
  }
  if (isLoading) {
    return <h2> Fetching Smurf data for you...</h2>
  }
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps, {fetchSmurfs}) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.