import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem, Image } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class ETL extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Image src={images.logoTalend} width={250} className="leftCornerAuchan"/>
        <Heading size={4} textColor="tertiary" lineHeight={2} caps={true}>etl</Heading>
        <Heading size={6} lineHeight={0} bold={false} textSize={'3vw'}>Extract Transform Load</Heading>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
        <Image src={images.etlDiagram} height={'45%'} className={'positionImageDiagram'}/>
      </Slide>
    )
  }
}
