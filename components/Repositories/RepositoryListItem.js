import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../common/Card';
import { Dimensions } from '../../constants';

const RepositoryListItem = ({ repository }) => (
  <RepositoryItem>
    <Card
      style={{ margin: Dimensions.extraSmallMargin }}
      titleMaxLines={2}
      bodyMaxLines={5}
      title={repository.name}
      body={repository.description}
    />
  </RepositoryItem>
);

const RepositoryItem = styled.View`
  width: 50%;
`;

RepositoryListItem.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default RepositoryListItem;
