import React, { Component } from 'react';
import { Heading, Slide, Image } from 'spectacle';
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
      </Slide>
    );
  }
}
