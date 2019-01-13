import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

import Github from '../services/Github';

import { Title, Separator } from '../components/common';
import { Colors, Dimentions } from '../constants';
import RepositoryList from '../components/Repositories/RepositoryList';

export default class RepositoriesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { repositories: [], hasError: false };
  }

  async componentWillMount() {
    try {
      const repositories = await Github.getAllTrendingRepositories();
      this.setState({ repositories });
    } catch (err) {
      this.setState({ hasError: true });
      console.log(err);
    }
  }

  showErrorMessages() {
    const { hasError } = this.state;
    if (hasError) {
      return <Text>Unable to show results.</Text>;
    }

    return undefined;
  }

  render() {
    const { repositories } = this.state;
    return (
      <Wrapper>
        <Container>
          <ScrolledView>
            <Title>Hey, it's me.</Title>
            <Separator />

            <RepositoryList repositories={repositories} />

            {this.showErrorMessages()}
          </ScrolledView>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  backgroundcolor: ${Colors.backgroundColor};
`;

const Container = styled.View`
  flex: 1;
  backgroundcolor: ${Colors.backgroundColor};
`;

const ScrolledView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    marginLeft: Dimentions.defaultMargin,
    marginRight: Dimentions.defaultMargin,
  },
})`
  flex: 1;
`;
