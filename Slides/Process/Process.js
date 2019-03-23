import React, { Component } from 'react'
import { Slide, Heading, Text, Image } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class Process extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>Process interne</Heading>
          <Text textAlign='left'>Spécifications du besoin</Text>
          <Text textAlign='left'>Développement</Text>
          <Text textAlign='left'>Qualification interne croisée</Text>
          <Text textAlign='left'>Qualification externe</Text>
          <Text textAlign='left'>Livraison & Déploiement</Text>
        <Image src={gifs.process} className="rightBottomCorner" height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
