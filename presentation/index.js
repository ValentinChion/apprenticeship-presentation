// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import PresentationSlide from '../Slides/PresentationSlide/PresentationSlide';
import KeyFiguresSopraSteria from '../Slides/KeyFiguresSopraSteria/KeyFigures';
import KeyFiguresAuchan from '../Slides/KeyFiguresAuchan/KeyFigures';
import ActivitiesSopra from '../Slides/ActivitiesSopra/ActivitiesSopra';
import AuchanDpc from '../Slides/AuchanDPC/AuchanDPC';
import Objectives from '../Slides/Objectives/Objectives';
import Talend from '../Slides/Talend/Talend';
import SopraTeam from '../Slides/SopraTeam/SopraTeam';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
};


// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress={"pacman"}>
        <PresentationSlide/>
        <ActivitiesSopra/>
        <KeyFiguresSopraSteria/>
        <SopraTeam/>
        <KeyFiguresAuchan/>
        <AuchanDpc/>
        <Objectives/>
        <Talend/>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
