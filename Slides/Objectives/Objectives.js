import React, {Component} from 'react';
import { Heading, Text, List, ListItem, Slide, Image } from 'spectacle';
import { gifs } from '../../assets/imageImport';


export default class Objectives extends Component {
  render() {
    return (
      <Slide textColor="secundary" align={"center flex-start"}>
        <Heading size={4} textColor="tertiary" lineHeight={2}>
          Nos missions
        </Heading>
        <List textColor="secundary" size={4}>
          <ListItem>Transfert de données</ListItem>
          <ListItem>Master Data Manager</ListItem>
        </List>
        <Text fit={true}>
          Pour cela, on utilise une suite d'outils créée par Talend.
        </Text>
        <Image src={gifs.mission} className={'rightBottomCorner'} height={'30%'}/>
        <Text className="positionSlideIndex">{this.props.slideIndex + 1}</Text>
      </Slide>
    );
  }
}
