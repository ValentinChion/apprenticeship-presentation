import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem, Image } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class SopraTeam extends Component {
  render() {
    return (
      <Slide align={"flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>
          Notre équipe
        </Heading>
        <Text textAlign={"left"} >
          Composée de 15 membres
        </Text>
        <Text textAlign={"left"}>
          Venant de différents domaines professionnels
        </Text>
        <Text textAlign={"left"}>
          Une équipe jeune et motivée
        </Text>
        <Image src={gifs.team} className={'bottomCenter'} height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
      )
    }
  }
  