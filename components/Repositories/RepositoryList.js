import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RepositoryListItem from './RepositoryListItem';

const RepositoryList = props => (
  <RepositoryListHolder {...props}>
    {props.repositories.map(repo => (
      <RepositoryListItem navigation={props.navigation} key={repo.url} repository={repo} />
    ))}
  </RepositoryListHolder>
);

const RepositoryListHolder = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
`;

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default RepositoryList;
