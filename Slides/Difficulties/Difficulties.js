import React, { Component } from 'react'
import { Slide, Heading, Text, Markdown } from 'spectacle';

export default class Difficulties extends Component {
  render() {
    return (
      <Slide align={"center flex-start"} notes={"test"}>
        <Heading size={4} textColor="tertiary" lineHeight={3} textSize={'4vw'} caps={true}>Difficultés</Heading>
        <Text textSize={'3.2vw'} textAlign={'left'}>Expression du besoin</Text>
        <Text textSize={'3.2vw'} textAlign={'left'}>Peu de documentation sur les développements legacy</Text>
        <Text textSize={'3.2vw'} textAlign={'left'}>Communauté Talend</Text>
      </Slide>
    )
  }
}
