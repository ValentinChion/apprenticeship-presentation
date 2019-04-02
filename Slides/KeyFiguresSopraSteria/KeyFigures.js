import React, { Component } from 'react';
import { Heading, Slide, Image, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class KeyFigures extends Component {
  render() {
    return (
      <Slide>
        <Image src={images.sopraSteriaLogo} className="leftCorner"/>
        <Heading size={1} textColor="tertiary" textSize={'7vw'}>
          4,095,000,000&nbsp;€
        </Heading>
        <Heading size={3} textColor="secondary" textSize={'5vw'}>
          44,000&nbsp;Collaborateurs
        </Heading>
        <Heading size={3} textColor="quaternary" textSize={'5vw'}>
          25&nbsp;Pays
        </Heading>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
