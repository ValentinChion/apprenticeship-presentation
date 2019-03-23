import React, { Component } from 'react'
import { Slide, Heading, Text } from 'spectacle';

export default class ProfessionalExperience extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={4} textColor="tertiary" lineHeight={2}>Mon expérience</Heading>

        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
