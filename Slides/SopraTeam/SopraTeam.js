import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle';

export default class SopraTeam extends Component {
  render() {
    return (
      <Slide align={"flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>
          Notre équipe
        </Heading>
        <Text textAlign={"left"} >
          Composé de 15 membres
        </Text>
        <Text textAlign={"left"}>
          Venant de différents domaines professionnel
        </Text>
        <Text textAlign={"left"}>
          Une équipe jeune et motivée
        </Text>
        <Text className="positionSlideIndex">{this.props.slideNbr}</Text>
      </Slide>
      )
    }
  }
  