import React, {Component} from 'react';
import { Heading, Text, List, ListItem, Slide } from 'spectacle';


export default class Objectives extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3} textColor="tertiary">Nos missions</Heading>
        <List textColor="secundary" size={4}>
          <ListItem>Transfert de données</ListItem>
          <ListItem>Master Data Manager</ListItem>
        </List>
        <Text fit={true}>
          Pour cela, on utilise une suite d'outils créée par Talend.
        </Text>
      </Slide>
    );
  }
}
