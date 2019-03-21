import React, {Component} from 'react'
import { Deck, Heading, Image, List, ListItem, Slide } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class ActivitiesSopra extends Component {
  render() {
    return (
      <Slide transition={['fade']} textColor="secundary">
        <Image src={images.sopraSteriaLogo} className="leftCorner"/>
        <Heading size={6} textColor="tertiary" caps>
          Activités de l'agence
        </Heading>
        <List>
          <ListItem bulletStyle="star">Bancaire</ListItem>
          <ListItem bulletStyle="star">Transport</ListItem>
          <ListItem bulletStyle="star">Distribution</ListItem>
          <ListItem bulletStyle="star">Retail</ListItem>
        </List>
      </Slide>
    );
  }
}
