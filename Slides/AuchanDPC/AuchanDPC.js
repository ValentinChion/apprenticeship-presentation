import React, {Component} from 'react'
import { Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class AuchanDpc extends Component {
  render() {
    return (
      <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
        <Image src={images.sopraSteriaLogo} className="leftCorner"/>
        <Heading size={6} textColor="primary" caps>
          Auchan - DPC
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
