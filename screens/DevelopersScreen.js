import React from 'react';
import styled from 'styled-components';
import { RefreshControl, Text } from 'react-native';

import Github from '../services/Github';
import DevelopersList from '../components/Developers/DevelopersList';
import { Dimensions } from '../constants';
import Title from '../components/common/Title';
import StorageService from '../services/Storage.service';
import Separator from '../components/common/Separator';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    headerStyle: { borderBottomWidth: 0 },
  };

  constructor(props) {
    super(props);
    this.state = { developers: [], hasError: false, refreshing: false };
  }

  async componentWillMount() {
    await this.fetchData(false);
  }

  /**
   * Handles onRefresh events from the RefreshControl
   *
   * @returns {Promise<void>}
   */
  async onRefresh() {
    this.setState({ refreshing: true });
    await this.fetchData(true);
  }

  async fetchData(shouldClearData) {
    try {
      if (shouldClearData) {
        await StorageService.deleteItems();
      }
      const developersCache = await StorageService.getItem('@developers');
      if (developersCache) {
        const developers = JSON.parse(developersCache);
        this.setState({
          developers,
          refreshing: false,
        });
      } else {
        const developers = await Github.getAllTrendingDevelopers();
        const developersAsJson = JSON.stringify(developers);
        await StorageService.saveItem('@developers', developersAsJson);
        this.setState({
          developers,
          refreshing: false,
        });
      }
    } catch (error) {
      this.setState({
        hasError: true,
        refreshing: false,
      });
    }
  }

  /**
   * Render a simple error message to the user
   *
   * @returns {JSX} A simple element to render in the screen.
   */
  showErrorMessages() {
    const { hasError } = this.state;
    if (hasError) {
      return <Text>Unable to show results.</Text>;
    }

    return null;
  }

  /**
   * Renders the refresh control.
   *
   * @returns {JSX} A refresh control element.
   */
  renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={() => this.onRefresh()}
      />
    );
  }

  /**
   * Render the Developers screen
   *
   * @returns {JSX} The element to render
   */
  render() {
    const { developers } = this.state;
    return (
      <ScrolledView refreshControl={this.renderRefreshControl()}>
        <Title>Trending Developers</Title>
        <Separator />
        {this.showErrorMessages()}
        <DevelopersList developers={developers} />
      </ScrolledView>
    );
  }
}

const ScrolledView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    marginLeft: Dimensions.defaultMargin,
    marginRight: Dimensions.defaultMargin,
  },
})`
  flex: 1;
`;
