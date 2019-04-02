import React, { Component } from 'react'
import { Slide, Heading, List, Text } from 'spectacle';

export default class ProjectManagement extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={3} caps textSize={'3.5vw'}>Project Management</Heading>
          <Text textAlign={'left'} textSize={'3.2vw'}>Un&nbsp;chef&nbsp;&&nbsp;une&nbsp;directrice&nbsp;de&nbsp;projet</Text>
          <Text textAlign={'left'} textSize={'3.2vw'}>Management visuel: Task Board</Text>
          <Text textAlign={'left'} textSize={'3.2vw'}>Daily Meeting</Text>
          <Text textAlign={'left'} textSize={'3.2vw'}>Suivi d'activité</Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
