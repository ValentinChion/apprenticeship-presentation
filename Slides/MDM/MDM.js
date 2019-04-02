import React, { Component } from 'react'
import { Slide, Image, Text, Heading } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class MDM extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Image src={images.logoTalend} width={250} className="leftCornerAuchan"/>
        <Heading size={4} textColor="tertiary" lineHeight={1}>MDM</Heading>
        <Heading size={6} lineHeight={2} bold={false} textSize={'3vw'}>Master Data Management</Heading>
        <Image src={images.mdmDiagram} height={'40%'} className={'positionImageDiagramMDM'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
