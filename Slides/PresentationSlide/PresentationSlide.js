import React, {Component} from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class PresentationSlide extends Component {
  render() {
    return (
      <Slide align={"left"} bgImage={images.ourTeam}>
          <Heading size={1} fit caps textColor="primary" >
            Soutenance de mi-parcours
          </Heading>
          <Text margin="10px 0 0" textColor="primary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
