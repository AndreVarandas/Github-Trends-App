import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Builds a rounded image component for the uri.
 * Can be used in three different sizes:
 *
 * ['small', 'medium', 'big']
 *
 * @param {string} uri  - The uri of the image.
 * @param {string} size - The size to use.
 * @returns {JSX}       - The JSX component for the Avatar.
 */
const Avatar = ({ source, size }) => {
  let imageSize = '50px';
  switch (size.toLowerCase()) {
    case 'small':
      imageSize = '25px';
      break;
    case 'medium':
      imageSize = '50px';
      break;
    case 'big':
      imageSize = '100px';
      break;
    default:
      break;
  }

  return <AvatarContent size={imageSize} source={{ uri: source }} />;
};

/**
 * Styled component for the avatar.
 */
const AvatarContent = styled.Image`
  border-radius: ${props => parseInt(props.size, 0) / 2};
  width: ${props => props.size};
  height: ${props => props.size};
`;

Avatar.defaultProps = {
  size: '50px',
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Avatar;
