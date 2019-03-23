import React, { Component } from 'react'
import { Slide, Text, Heading, List, ListItem } from 'spectacle';

export default class Summary extends Component {
  render() {
    return (
      <Slide align="center flex-start" bgColor="tertiary">
        <Heading size={4} textColor="primary" lineHeight={2}>Sommaire</Heading>
        <List ordered type="1" textColor="primary">
          <ListItem>Sopra Steria</ListItem>
          <ListItem>Le client</ListItem>
          <ListItem>Nos missions</ListItem>
          <ListItem>Talend</ListItem>
          <ListItem>Process</ListItem>
          <ListItem>Et la suite ?</ListItem>
        </List>
        <Text textColor="primary" className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
