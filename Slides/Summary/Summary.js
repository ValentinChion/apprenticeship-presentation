import React, { Component } from 'react'
import { Slide, Text, Heading, List, ListItem } from 'spectacle';

export default class Summary extends Component {
  render() {
    return (
      <Slide align="center flex-start" bgColor="tertiary">
        <Heading size={4} textColor="primary" lineHeight={3} textSize={'3.2vw'}>Sommaire</Heading>
        <List ordered type="1" textColor="primary">
          <ListItem textSize={'3.2vw'}>Sopra Steria</ListItem>
          <ListItem textSize={'3.2vw'}>Le client</ListItem>
          <ListItem textSize={'3.2vw'}>Nos missions</ListItem>
          <ListItem textSize={'3.2vw'}>Talend</ListItem>
          <ListItem textSize={'3.2vw'}>Process</ListItem>
          <ListItem textSize={'3.2vw'}>Et la suite ?</ListItem>
        </List>
        <Text textColor="primary" className="positionSlideIndex" textSize={'3.2vw'}>{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
