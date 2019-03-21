import React, {Component} from 'react'
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class ActivitiesSopra extends Component {
  render() {
    return (
      <Slide transition={['fade']} textColor="secundary" align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>
          Activités de l'agence
        </Heading>
        <List>
          <ListItem bulletStyle="star">Bancaire</ListItem>
          <ListItem bulletStyle="star">Transport</ListItem>
          <ListItem bulletStyle="star">Distribution</ListItem>
          <ListItem bulletStyle="star">Retail</ListItem>
        </List>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
