import React from 'react';
import DevelopersListItem from './DevelopersListItem';

export default ({ developers }) => developers.map(developer => (
  <DevelopersListItem key={developer.username} developer={developer} />
));
