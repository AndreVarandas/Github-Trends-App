import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const Title = ({ children, fontSize }) => (
  <TitleComponent>{children}</TitleComponent>
);

const TitleComponent = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : '32px')};
  color: ${Colors.textColor};
  font-weight: ${Fonts.bold};
`;

Title.defaultProps = {
  fontSize: '32px',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
};

export default Title;
