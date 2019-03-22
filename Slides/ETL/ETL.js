import React, { Component } from 'react'
import { Slide, Heading, Text, List, ListItem, Image } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class ETL extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>ETL</Heading>
        <Heading size={6} lineHeight={0} bold={false}>Extract Transform Load</Heading>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
        <Image src={images.etlDiagram} height={"45%"} className={"positionImageDiagram"}></Image>
      </Slide>
    )
  }
}
