import React from 'react';
import PropTypes from 'prop-types';
import Words from 'containers/forms/words';
import WrapBodyScroll from 'components/wrap-body';

const VocabularyEdit = ({ match }) => (
  <WrapBodyScroll scroll>
    <Words id={match.params.id} />
  </WrapBodyScroll>
);

VocabularyEdit.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

VocabularyEdit.defaultProps = {
  match: {},
};

export default VocabularyEdit;
