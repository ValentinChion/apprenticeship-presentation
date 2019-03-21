import React, { Component } from 'react';
import { Heading, Slide, Image, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class KeyFigures extends Component {
  render() {
    return (
      <Slide>
        <Image src={images.sopraSteriaLogo} className="leftCorner"/>
        <Heading size={1} textColor="tertiary">
          4,095,000,000 €
        </Heading>
        <Heading size={3} textColor="secondary">
          44,000 Collaborateurs
        </Heading>
        <Heading size={3} textColor="quaternary">
          25 Pays
        </Heading>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
