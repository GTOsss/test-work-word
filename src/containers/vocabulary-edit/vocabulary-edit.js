import React from 'react';
import PropTypes from 'prop-types';
import Words from 'containers/forms/words';
import WrapBody from 'components/wrap-body';

const VocabularyEdit = ({ match }) => (
  <WrapBody scroll>
    <Words id={match.params.id} />
  </WrapBody>
);

VocabularyEdit.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

VocabularyEdit.defaultProps = {
  match: {},
};

export default VocabularyEdit;
