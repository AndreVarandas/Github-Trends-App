import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Dimensions } from '../../constants';
import Title from '../common/Title';

/**
 * This element is responsible to render a list item for the developer list.
 *
 * @param {object} developer Object containing developer properties and info.
 * @returns {JSX} Returns a JSX element
 */
const DeveloperListItem = ({ developer }) => {
  return (
    <View>
      <ListItem>
        <Avatar source={{ uri: developer.avatar }} />
        <ListItemDetail>
          <Title fontSize="16px">{developer.name || developer.username}</Title>
          <Text>{developer.url}</Text>
        </ListItemDetail>
      </ListItem>
    </View>
  );
};

const ListItem = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  marginTop: ${Dimensions.smallMargin}px;
  marginBottom: ${Dimensions.smallMargin}px;
`;

const ListItemDetail = styled.View`
  flex: 1;
  justify-content: center;
  margin: ${Dimensions.smallMargin}px ${Dimensions.smallMargin}px ${Dimensions.smallMargin}px ${Dimensions.defaultMargin}px;
`;

const Avatar = styled.Image`
  border-radius: 25;
  width: 50px;
  height: 50px;
`;

/**
 * Proptypes definition for DeveloperListItem
 *
 * @type {{developer: (*)}}
 */
DeveloperListItem.propTypes = {
  developer: PropTypes.object.isRequired,
};

export default DeveloperListItem;