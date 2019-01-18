import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';
import Dimensions from '../../constants/Dimensions';

/**
 * This Component renders a badge with a text and color.
 *
 * @param {string} text  - The text to render.
 * @param {string} color - The color to use as background.
 *
 * @returns {JSX} - The JSX element to render a badge.
 */
const Badge = ({ text, backgroundColor }) => {
  return (
    <BadgeWrapper>
      <BadgeContent backgroundColor={backgroundColor}>
        <BadgeText>{text}</BadgeText>
      </BadgeContent>
    </BadgeWrapper>
  );
};

/**
 * This is the component wrapper, used to control flex properties.
 */
const BadgeWrapper = styled.View`
  flex-shrink: 1;
  flex-direction: row;
`;

/**
 * The badge content, where the background color is applied.
 */
const BadgeContent = styled.View`
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  padding: ${Dimensions.extraSmallPadding}px ${Dimensions.smallPadding}px
    ${Dimensions.extraSmallPadding}px ${Dimensions.smallPadding}px;
`;

/**
 * The badgeText, where the text for the component is shown.
 */
const BadgeText = styled.Text`
  color: ${Colors.textColor};
`;

Badge.defaultProps = {
  backgroundColor: Colors.backgroundColor,
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default Badge;
