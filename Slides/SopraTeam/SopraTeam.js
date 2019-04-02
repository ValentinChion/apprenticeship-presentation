import React, { Component } from 'react';
import { Slide, Heading, Text, List, ListItem, Image } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class SopraTeam extends Component {
  render() {
    return (
      <Slide align={'flex-start'}>
        <Heading size={4} textColor="tertiary" lineHeight={2} textSize={'3.2vw'} caps>
          Notre équipe
        </Heading>
        <Text textSize={'3.2vw'} textAlign={'left'}>
          Une équipe jeune et motivée
        </Text>
        <Text textSize={'3vw'} textAlign={'left'}>
          Composée de 15 membres
        </Text>
        <Text textSize={'3vw'} textAlign={'left'}>
          Venant de différents domaines professionnels
        </Text>
        <Image src={gifs.team} className={'bottomCenter'} height={'35%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
