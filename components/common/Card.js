import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Title } from '.';
import { Colors, Dimensions } from '../../constants';

const { smallMargin } = Dimensions;

const Card = props => (
  <CardWrapper {...props}>
    <Title
      numberOfLines={props.titleMaxLines}
      style={styles.titleElement}
      fontSize="18px"
    >
      {props.title}
    </Title>
    <CardBody numberOfLines={props.bodyMaxLines}>{props.body}</CardBody>
  </CardWrapper>
);

const CardWrapper = styled.View`
  border: 1px solid #fff;
  border-radius: 6px;
  backgroundColor: ${Colors.darkerBackgroundColor};
  min-height: 160px;
  max-height: 160px;
  padding: ${smallMargin}px;
`;

const CardBody = styled.Text`
  color: ${Colors.textColorLight};
`;

const styles = StyleSheet.create({
  titleElement: {
    marginBottom: smallMargin,
  },
});

Card.defaultProps = {
  bodyMaxLines: null,
  titleMaxLines: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bodyMaxLines: PropTypes.number,
  titleMaxLines: PropTypes.number,
};

export default Card;
