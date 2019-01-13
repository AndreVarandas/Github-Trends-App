import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../common/Card';

const RepositoryListItem = ({ repository }) => (
  <RepositoryItem>
    <Card title={repository.name} body={repository.description} />
  </RepositoryItem>
);

const RepositoryItem = styled.View`
  width: 50%;
`;

RepositoryListItem.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default RepositoryListItem;
