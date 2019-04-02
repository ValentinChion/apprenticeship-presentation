import React, {Component} from 'react';
import { Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';


export default class Talend extends Component {
  render() {
    return (
      <Slide align={"center flex-start"} bgColor="tertiary">
        <Heading size={4} textColor="primary" lineHeight={3} caps>Talend</Heading>
        <List textColor="primary" textAlign={"flex-end"}>
          <ListItem textSize={'3vw'}>Talend-Studio: ETL</ListItem>
          <ListItem textSize={'3vw'}>Talend&nbsp;MDM:&nbsp;BDD&nbsp;|&nbsp;webservices</ListItem>
        </List>
        <Text textColor="primary" fit lineHeight={6}>3 Millions de téléchargements à travers le monde</Text>
        <Text textColor="primary" className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
