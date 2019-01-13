import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Title } from '.';
import { Colors } from '../../constants';

const Card = ({ title, body }) => (
  <CardWrapper>
    <Title fontSize="18px">{title}</Title>
    <CardBody>{body}</CardBody>
  </CardWrapper>
);

const CardWrapper = styled.View`
  border: 1px solid ${Colors.shade};
  border-radius: 4px;
  backgroundcolor: ${Colors.darkerBackgroundColor};
  min-height: 150px;
  max-height: 150px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px 5px 10px 5px;
`;

const CardBody = styled.Text`
  color: ${Colors.shade};
`;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;
