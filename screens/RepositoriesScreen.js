import React from 'react';
import styled from 'styled-components';
import { Text, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import { Github, Storage } from '../services';
import { AppScrollView, Title, Separator } from '../components/common';
import { Colors, Dimensions } from '../constants';
import RepositoryList from '../components/Repositories/RepositoryList';

/**
 * This is the home screen, the main screen that is presented to
 * the user when the application is first launched.
 */
class RepositoriesScreen extends React.Component {
  /**
   * Header navigation configurations
   *
   * @type {{title: string, headerStyle: {borderBottomWidth: number}}}
   */
  static navigationOptions = {
    title: 'Repositories',
    headerStyle: { borderBottomWidth: 0 },
  };

  /**
   * Initialization
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = { repositories: [], hasError: false, refreshing: false };
  }

  /**
   * Fetch data from the server whenever the component mounts.
   *
   * @returns {Promise<void>}
   */
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

  /**
   * This method is responsible from getting and storing
   * repositories and managing data in the component state.
   *
   * @param {boolean} shouldClearData - indicates whether the cache should
   * be cleaned or not.
   * @returns {Promise<void>} Promise object that just sets the state.
   */
  async fetchData(shouldClearData) {
    try {
      if (shouldClearData) {
        await Storage.deleteItems();
      }
      /**
       * Get repositories form the local storage.
       * If present use them.
       */
      const repositoryCache = await Storage.getItem('@repositories');
      if (repositoryCache) {
        const repositories = JSON.parse(repositoryCache);
        this.setState({ repositories, refreshing: false });
      } else {
        /**
         * If no cache available, get data from the service
         */
        await this.fetchRepositories();
      }
    } catch (err) {
      /**
       * Handle any kind of errors here.
       */
      this.setState({ hasError: true, refreshing: false });
    }
  }

  async fetchRepositories() {
    /**
     * If no repositories found in the local storage,
     * grab them from the service, and set them in the state.
     */
    const repositories = await Github.getAllTrendingRepositories();
    const repositoriesAsJson = JSON.stringify(repositories);
    await Storage.saveItem('@repositories', repositoriesAsJson);
    this.setState({
      repositories,
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
   * Render elements into the screen
   *
   * @returns {JSX} The Repositories screen.
   */
  render() {
    const { repositories } = this.state;
    return (
      <Wrapper>
        <Container>
          <AppScrollView refreshControl={this.renderRefreshControl()}>
            <Title>Trending Repositories</Title>
            <Separator />

            <RepositoryList
              navigation={this.props.navigation}
              style={{
                marginLeft: -Dimensions.extraSmallMargin,
                marginRight: -Dimensions.extraSmallMargin,
              }}
              repositories={repositories}
            />

            {this.showErrorMessages()}
          </AppScrollView>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.backgroundColor};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.backgroundColor};
`;

RepositoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RepositoriesScreen;
