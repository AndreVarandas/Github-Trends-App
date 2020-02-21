import React from 'react';
import { Linking, Button } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Dimensions, Colors } from '../constants';
import { AppScrollView, Title, Separator, Badge } from '../components/common';
import DevelopersList from '../components/Developers/DevelopersList';

class RepositoryDetailsScreen extends React.Component {
  /**
   * Header navigation configurations
   *
   * @type {{title: string, headerStyle: {borderBottomWidth: number}}}
   */
  static navigationOptions = {
    title: 'Repository Details',
  };

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    const {
      builtBy,
      description,
      name,
      language = 'No Language',
      languageColor,
      url,
    } = repository;
    return (
      <AppScrollView>
        <Title fontSize="24px">{name}</Title>
        <Separator />
        <Badge text={language} backgroundColor={languageColor} />
        <RepositoryDescriptionText>{description}</RepositoryDescriptionText>
        <ReadMore>
          <ReadMoreButton
            title="View in the browser"
            onPress={() => Linking.openURL(url)}
          />
        </ReadMore>
        <Title fontSize="21px">Made By</Title>
        <Separator />
        <DevelopersList developers={builtBy} />
      </AppScrollView>
    );
  }
}

const RepositoryDescriptionText = styled.Text`
  color: ${Colors.textColorLight};
  font-size: 16px;
  line-height: 25;
  margin: ${Dimensions.smallMargin}px 0 ${Dimensions.smallMargin}px 0;
`;

const ReadMore = styled.View`
  margin: ${Dimensions.smallMargin}px 0 ${Dimensions.defaultMargin}px 0;
`;

const ReadMoreButton = styled.Button``;

RepositoryDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RepositoryDetailsScreen;
