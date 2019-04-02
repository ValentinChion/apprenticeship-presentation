import React, {Component} from 'react'
import { Heading, Slide, Text, Image } from 'spectacle';
import { images } from '../../assets/imageImport';

export default class AuchanDpc extends Component {
  render() {
    return (
      <Slide align="center flex-start" textColor="primary">
        <Heading size={5} textColor="tertiary" caps lineHeight={2} textSize={'2.8vw'}>
          Direction Produit Corporate
        </Heading>
        <Text fit>Concevoir les produits Auchan & approvisionner les magasins</Text>
        <Image src={images.marquesAuchan} className="bigImpact"/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
