import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarHome from 'containers/navbar-home';
import WrapBodyScroll from 'components/wrap-body';
import HomePage from 'components/home';
import Vocabularies from '../home/vocabularies';

const Home = () => (
  <div>
    <NavbarHome />
    <WrapBodyScroll>
      <Route exact path="/" component={HomePage} />
      <Route path="/vocabularies" component={Vocabularies} />
    </WrapBodyScroll>
  </div>
);

const mapStateToProps = state => ({
  location: state.routing.location,
});

export default connect(mapStateToProps)(Home);
