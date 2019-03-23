import React, { Component } from 'react'
import { Slide, Heading, Text } from 'spectacle';

export default class ProfessionalExperience extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={4} textColor="tertiary" lineHeight={2}>Mon expérience</Heading>
        <Text textAlign={'left'}>L'équipe est très enthousiaste</Text>
        <Text textAlign={'left'}>La direction est à l'écoute</Text>
        <Text textAlign={'left'} lineHeight={6}>Solidarité entre les membres</Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
