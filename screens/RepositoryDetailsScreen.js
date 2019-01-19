import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Title from '../components/common/Title';
import { Dimensions } from '../constants';
import DeveloperListItem from '../components/Developers/DevelopersListItem';
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

  static _renderBuiltBy(contributors) {
    return <DevelopersList developers={contributors} />;
  }

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    return (
      <View style={{ flex: 1, margin: Dimensions.defaultMargin }}>
        <DevelopersList developers={repository.builtBy} />
      </View>
    );
  }
}

RepositoryDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RepositoryDetailsScreen;
