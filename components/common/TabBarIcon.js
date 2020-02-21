import React from 'react';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon.Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={
        props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
      }
    />
  );
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
