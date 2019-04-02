import React, { Component } from 'react'
import { Slide, Heading, Text, Image } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class Process extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2} textSize={'3.6vw'} caps>Process & charges</Heading>
          <Text textAlign='left' textSize={'3.2vw'}>Spécifications du besoin</Text>
          <Text textAlign='left' textSize={'3.2vw'}>Développement</Text>
          <Text textAlign='left' textSize={'3.2vw'}>Qualification interne croisée</Text>
          <Text textAlign='left' textSize={'3.2vw'}>Qualification externe</Text>
          <Text textAlign='left' textSize={'3.2vw'}>Livraison & Déploiement</Text>
        <Image src={gifs.process} className="rightBottomCorner" height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
