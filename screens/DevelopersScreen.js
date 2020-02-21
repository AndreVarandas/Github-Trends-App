import React from 'react';
import { RefreshControl, Text } from 'react-native';

import { Github, Storage } from '../services';
import DevelopersList from '../components/Developers/DevelopersList';
import { AppScrollView, Separator, Title } from '../components/common';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
      hasError: false,
      refreshing: false,
    };
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

  static navigationOptions = {
    title: 'Developers',
    headerStyle: { borderBottomWidth: 0 },
  };

  async fetchData(shouldClearData) {
    try {
      if (shouldClearData) {
        await Storage.deleteItems();
      }
      const developersCache = await Storage.getItem('@developers');
      if (developersCache) {
        const developers = JSON.parse(developersCache);
        this.setState({
          developers,
          refreshing: false,
        });
      } else {
        await this.fetchDevelopers();
      }
    } catch (error) {
      this.setState({
        hasError: true,
        refreshing: false,
      });
    }
  }

  /**
   * Get developers data from the service.
   *
   * @returns {Promise<void>}
   */
  async fetchDevelopers() {
    const developers = await Github.getAllTrendingDevelopers();
    const developersAsJson = JSON.stringify(developers);
    await Storage.saveItem('@developers', developersAsJson);
    this.setState({
      developers,
      refreshing: false,
    });
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
      <AppScrollView refreshControl={this.renderRefreshControl()}>
        <Title>Trending Developers</Title>
        <Separator />
        {this.showErrorMessages()}
        <DevelopersList developers={developers} />
      </AppScrollView>
    );
  }
}
