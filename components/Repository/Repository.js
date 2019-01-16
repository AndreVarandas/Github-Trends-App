import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Repository = ({ repository }) => {
  return (
    <Wrapper>
      <Text>{repository.name}</Text>
      <Text>{repository.description}</Text>
      <Text>{repository.url}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
`;

Repository.propTypes = {
  repository: PropTypes.shape({
    author: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    language: PropTypes.string,
    languageColor: PropTypes.string,
    stars: PropTypes.number,
    forks: PropTypes.number,
    currentPeriodStars: PropTypes.number,
  }).isRequired,
};

export default Repository;
