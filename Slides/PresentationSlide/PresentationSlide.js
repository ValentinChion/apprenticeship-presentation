import React, {Component} from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class PresentationSlide extends Component {
  render() {
    return (
      <Slide align={"left center"} bgImage={images.presentationBG}>
          <Heading textSize={'4vw'} textAlign={'left'} caps textColor="secondary" className={'presentationPosition'} >
            Soutenance&nbsp;de&nbsp;mi<br/>parcours
          </Heading>
          <Text textSize={'3.5vw'} textAlign={'left'} margin="10px 0 0" textColor="quaternary" className={'presentationPosition'} bold>
            Sopra&nbsp;Steria&nbsp;|&nbsp;Auchan&nbsp;|&nbsp;ETL&nbsp;&&nbsp;MDM
          </Text>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
