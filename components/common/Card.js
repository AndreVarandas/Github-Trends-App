import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Colors, Dimensions } from '../../constants';

const Card = props => (
  <CardWrapper {...props}>
    <CardContent>{props.content}</CardContent>
  </CardWrapper>
);

const CardWrapper = styled.View`
  border: 1px solid #fff;
  border-radius: 6px;
  background-color: ${Colors.darkerBackgroundColor};
  min-height: 200px;
  max-height: 200px;
  padding: ${Dimensions.defaultPadding}px;
`;

const CardContent = styled.View``;

Card.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Card;
