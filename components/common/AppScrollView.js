import styled from 'styled-components';
import { Dimensions } from '../../constants';

export default styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    marginLeft: Dimensions.defaultMargin,
    marginRight: Dimensions.defaultMargin,
  },
})`
  flex: 1;
`;
