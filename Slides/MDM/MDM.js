import React, { Component } from 'react'
import { Slide, Image, Text, Heading } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class MDM extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={1}>MDM</Heading>
        <Heading size={6} lineHeight={2} bold={false}>Master Data Management</Heading>
        <Image src={images.mdmDiagram}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
