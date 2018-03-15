import React, { Component } from 'react';
import { NavBar, NavLink } from 'components/navbar';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as vocabulariesActions from 'actions/vocabularies';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavbarHome extends Component {
  componentDidMount() {
    const { vocabulariesGet } = this.props.actions;
    vocabulariesGet();
  }

  render() {
    return (
      <NavBar>
        <NavLink exact to="/">Главная</NavLink>
        <NavLink exact to="/vocabularies">Словари</NavLink>
      </NavBar>
    );
  }
}

NavbarHome.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any),
};

NavbarHome.defaultProps = {
  actions: {},
};

const mapStateToProps = state => ({
  location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
  actions: { ...bindActionCreators(vocabulariesActions, dispatch) },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarHome));
