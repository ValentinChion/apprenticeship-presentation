import React, {Component} from 'react';
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';


export default class Talend extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>Talend</Heading>
        <List textAlign={"flex-end"}>
          <ListItem>Talend-Studio: ETL</ListItem>
          <ListItem>Talend MDM: BDD avec des webservices</ListItem>
        </List>
        <Text fit lineHeight={6}>3 Millions de téléchargements à travers le monde</Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
