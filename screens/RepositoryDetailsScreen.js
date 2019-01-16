import React from 'react';
import { View, Text } from 'react-native';

export default class RepositoryDetailsScreen extends React.Component {
  /**
   * Header navigation configurations
   *
   * @type {{title: string, headerStyle: {borderBottomWidth: number}}}
   */
  static navigationOptions = {
    title: 'Repository Details',
  };

  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}
