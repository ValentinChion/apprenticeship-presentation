import React, { Component } from 'react'
import { Slide } from 'spectacle';
import { gifs } from '../../assets/imageImport';

export default class TheEnd extends Component {
  render() {
    return (
      <Slide bgImage={gifs.theEnd}/>
    )
  }
}
