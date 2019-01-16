import React from 'react';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const Title = props => (
  <TitleComponent {...props}>{props.children}</TitleComponent>
);

const TitleComponent = styled.Text`
  font-size: ${props => props.fontSize || '32px'};
  color: ${Colors.textColor};
  font-weight: ${Fonts.bold};
`;

Title.defaultProps = {
  fontSize: '32px',
  style: {},
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  style: ViewPropTypes.style,
};

export default Title;
