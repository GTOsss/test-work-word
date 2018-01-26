import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarHome from 'containers/navbar-home';
import Vocabularies from '../home/vocabularies';

const Home = () => (
  <div>
    <NavbarHome />
    <Route path="/vocabularies" component={Vocabularies} />
  </div>
);

const mapStateToProps = state => ({
  location: state.routing.location,
});

export default connect(mapStateToProps)(Home);
