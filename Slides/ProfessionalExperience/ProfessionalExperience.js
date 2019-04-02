import React, { Component } from 'react'
import { Slide, Heading, Text } from 'spectacle';

export default class ProfessionalExperience extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={4} textColor="tertiary" lineHeight={3} caps textSize={'3.5vw'}>Mon expérience</Heading>
        <Text textSize={'3.2vw'} textAlign={'left'}>L'équipe est très enthousiaste</Text>
        <Text textSize={'3.2vw'} textAlign={'left'}>La direction est à l'écoute</Text>
        <Text textSize={'3.2vw'} textAlign={'left'}>Solidarité entre les membres</Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
