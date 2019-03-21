import React, {Component} from 'react';
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';


export default class Talend extends Component {
  render() {
    return (
      <Slide>
        <Heading size={2} textColor="tertiary">Talend</Heading>
        <Text fit>3 Millions de téléchargements à travers le monde</Text>
        <List>
          <ListItem>Talend-Studio: ETL</ListItem>
          <ListItem>Talend MDM: BDD avec des webservices</ListItem>
        </List>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
