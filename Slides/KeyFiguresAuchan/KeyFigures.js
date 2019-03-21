import React, {Component} from 'react';
import { Heading, Image, Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class KeyFigures extends Component {
  render() {
    return (
      <Slide>
        <Image src={images.auchanLogo} width={250} height={74} className="leftCornerAuchan"/>
        <Heading size={2} textColor="tertiary">
          50,000,000,000 €
        </Heading>
        <Heading size={3} textColor="secondary">
          354,000 Collaborateurs
        </Heading>
        <Heading size={3} textColor="quaternary">
          17 Pays
        </Heading>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
