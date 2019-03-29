import React, { Component } from 'react'
import { Slide, Heading, List, Text } from 'spectacle';

export default class ProjectManagement extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>Project Management</Heading>
          <Text textAlign={'left'}>Un chef & une directrice de projet</Text>
          <Text textAlign={'left'}>Management visuel: Task Board</Text>
          <Text textAlign={'left'}>Daily Meeting</Text>
          <Text textAlign={'left'}>Suivi d'activité</Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
