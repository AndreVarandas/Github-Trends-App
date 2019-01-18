import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Card, Badge, Title } from '../common';
import Dimensions from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const RepositoryListItem = ({ repository, navigation }) => (
  <RepositoryItem>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('RepositoryDetails')}
    >
      <Card content={<CardContent repository={repository} />} />
    </TouchableOpacity>
  </RepositoryItem>
);

const CardContent = ({ repository }) => {
  return (
    <CardBody>
      <Title fontSize="24px">{repository.name}</Title>
      <CardText>
        {repository.description || '🔎 - This project has no description.'}
      </CardText>
      <BadgeContent repository={repository} />
    </CardBody>
  );
};

const BadgeContent = ({ repository }) => (
  <Badge
    text={repository.language || 'No Language'}
    backgroundColor={repository.languageColor}
  />
);

const CardBody = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${Colors.textColorLight};
  margin: ${Dimensions.smallMargin}px 0 ${Dimensions.smallMargin}px 0;
`;

const RepositoryItem = styled.View`
  /*width: 50%; for two columns*/
  width: 100%;
  margin-bottom: ${Dimensions.smallMargin}px;
`;

CardContent.propTypes = {
  repository: PropTypes.object.isRequired,
};

BadgeContent.propTypes = {
  repository: PropTypes.object.isRequired,
};

RepositoryListItem.propTypes = {
  repository: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default RepositoryListItem;
