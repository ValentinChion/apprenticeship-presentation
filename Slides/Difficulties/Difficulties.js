import React, { Component } from 'react'
import { Slide, Heading, Text } from 'spectacle';

export default class Difficulties extends Component {
  render() {
    return (
      <Slide align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>Difficultés</Heading>
        <Text textAlign={'left'}>Expression du besoin</Text>
        <Text textAlign={'left'}>Peu de documentation sur les développements legacy</Text>
        <Text textAlign={'left'}>Communauté Talend</Text>
      </Slide>
    )
  }
}
