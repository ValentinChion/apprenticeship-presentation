import React, { Component } from 'react'
import { Slide, Heading, Image, Text, List, ListItem } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class WhatsNext extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={4} textColor="tertiary" lineHeight={2}>Et la suite ?</Heading>
        <List textColor="secondary">
          <ListItem>Montée en responsabilité</ListItem>
          <ListItem>Gestion complète des tâches</ListItem>
          <ListItem>Devenir autonome sur le MDM</ListItem>
        </List>
        <Image src={gifs.whatsNext} className={'rightBottomCorner'} height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
