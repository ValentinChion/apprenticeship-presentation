import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle';

export default class ETL extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>ETL</Heading>
        <Text fit lineHeight={0}>Extract Transform Load</Text>
        <List>
          <ListItem>Coucou</ListItem>
        </List>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
