import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle';

export default class Process extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>Process interne</Heading>
        <List>
          <ListItem>Spécifications du besoin</ListItem>
          <ListItem>Développement</ListItem>
          <ListItem>Qualification interne croisée</ListItem>
          <ListItem>Qualification externe</ListItem>
          <ListItem>Livraison & Déploiement</ListItem>
        </List>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
