import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Dimensions, Colors } from '../constants';
import DevelopersList from '../components/Developers/DevelopersList';
import { Title, Separator } from '../components/common';

class RepositoryDetailsScreen extends React.Component {
  /**
   * Header navigation configurations
   *
   * @type {{title: string, headerStyle: {borderBottomWidth: number}}}
   */
  static navigationOptions = {
    title: 'Repository Details',
  };

  static _renderBuiltBy(contributors) {
    return <DevelopersList developers={contributors} />;
  }

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    return (
      <ScrolledView>
        <Title fontSize="24px">{repository.name}</Title>
        <Separator />
        <RepositoryDescriptionText>{repository.description}</RepositoryDescriptionText>
        <Title fontSize="21px">Made By</Title>
        <Separator />
        <DevelopersList developers={repository.builtBy} />
      </ScrolledView>
    );
  }
}

const RepositoryDescriptionText = styled.Text`
  color: ${Colors.textColorLight};
  font-size: 16px;
  line-height: 25;
  margin: 0 0 ${Dimensions.smallMargin}px 0; 
`;

const ScrolledView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    marginLeft: Dimensions.defaultMargin,
    marginRight: Dimensions.defaultMargin,
  },
})`
  flex: 1;
`;

RepositoryDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RepositoryDetailsScreen;
