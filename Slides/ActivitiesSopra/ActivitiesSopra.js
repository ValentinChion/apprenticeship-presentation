import React, {Component} from 'react'
import { Heading, List, ListItem, Slide, Text } from 'spectacle';

export default class ActivitiesSopra extends Component {
  render() {
    return (
      <Slide textColor="secundary" align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={3} textSize={'3vw'} caps>
          Activités de la division Nord
        </Heading>
        <List>
          <ListItem textSize={'2.9vw'} bulletStyle="star">Bancaire</ListItem>
          <ListItem textSize={'2.9vw'} bulletStyle="star">Transport</ListItem>
          <ListItem textSize={'2.9vw'} bulletStyle="star">Assurance</ListItem>
          <ListItem textSize={'2.9vw'} bulletStyle="star">Industrie</ListItem>
          <ListItem textSize={'2.9vw'} bulletStyle="star">Retail</ListItem>
        </List>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
