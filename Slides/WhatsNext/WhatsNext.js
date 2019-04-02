import React, { Component } from 'react'
import { Slide, Heading, Image, Text, List, ListItem } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class WhatsNext extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={4} textColor="tertiary" lineHeight={3} caps textSize={'3.5vw'}>Et la suite ?</Heading>
        <List textColor="secondary">
          <ListItem textSize={'3.1vw'}>Montée en responsabilité</ListItem>
          <ListItem textSize={'3.1vw'}>Gestion complète des tâches</ListItem>
          <ListItem textSize={'3.1vw'}>Devenir&nbsp;autonome&nbsp;sur&nbsp;le&nbsp;MDM</ListItem>
        </List>
        <Image src={gifs.whatsNext} className={'rightBottomCorner'} height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
