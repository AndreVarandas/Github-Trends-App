import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RepositoryListItem from './RepositoryListItem';

const RepositoryList = ({ repositories }) => (
  <RepositoryListHolder>
    {repositories.map(repo => (
      <RepositoryListItem key={repo.url} repository={repo} />
    ))}
  </RepositoryListHolder>
);

const RepositoryListHolder = styled.View`
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`;

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RepositoryList;
