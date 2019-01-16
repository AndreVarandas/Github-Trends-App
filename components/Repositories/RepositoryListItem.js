import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../common/Card';
import { Dimensions } from '../../constants';

const RepositoryListItem = ({ repository, navigation }) => (
  <RepositoryItem>
    <TouchableHighlight onPress={() => navigation.navigate('RepositoryDetails')}>
      <Card
        style={{ margin: Dimensions.extraSmallMargin }}
        titleMaxLines={2}
        bodyMaxLines={5}
        title={repository.name}
        body={repository.description}
      />
    </TouchableHighlight>
  </RepositoryItem>

);

const RepositoryItem = styled.View`
  width: 50%;
`;

RepositoryListItem.propTypes = {
  repository: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default RepositoryListItem;
