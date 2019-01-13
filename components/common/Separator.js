import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default () => <Hr />;

const Hr = styled.View`
  border-color: ${Colors.shade};
  border-bottom-width: ${StyleSheet.hairlineWidth};
  margin-top: 10;
  margin-bottom: 10;
`;
