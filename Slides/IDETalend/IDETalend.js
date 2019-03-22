import React, { Component } from 'react'
import { Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class IDETalend extends Component {
  render() {
    return (
      <Slide bgImage={images.talendIDE}>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    )
  }
}
