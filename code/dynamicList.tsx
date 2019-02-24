import * as React from "react";
import {Frame, Stack, Data, Animatable, Override, Color, Scroll } from "framer";

import {M_card} from "./canvas"

export const data = Data({ 
  numberOfCards: Animatable(1),
  dataObjectfromAPI: [
    'card 01',
    'card 02',
    'card 03',
    'card 04',
  ],
  cardheight: 100 * 4,
})



export const updateNumOfCards: Override = () => {
  console.log(100 * data.dataObjectfromAPI.length)

  let newHeight = 100 * data.dataObjectfromAPI.length

  return {
    dataObjectfromAPI: data.dataObjectfromAPI,
  }
}


export const dataObjectOfOne: Override = () => {
  return {
      onTap() {
        data.dataObjectfromAPI = ['card 01']
        // console.log(data.dataObjectfromAPI)
      },
  }
}


export const dataObjectOfThree: Override = () => {
  return {
      onTap() {
        data.dataObjectfromAPI = [
          'card 01',
          'card 02',
          'card 03',
        ]
        // console.log(data.dataObjectfromAPI)
      },
  }
}



export const dataObjectOfSeven: Override = () => {
  return {
      onTap() {
        data.dataObjectfromAPI = [
          'card 01',
          'card 02',
          'card 03',
          'card 04',
          'card 05',
          'card 06',
          'card 07',
        ]
        // console.log(data.dataObjectfromAPI)
      },
  }
}




type Props = { 
  dataObjectfromAPI: Array<string>,
  height: number,
  width: number,
};


export class _dynamicList extends React.Component<Props> {

  cardArray = []



  render() {
    console.log('re-render dynamic list')
    this.createCards()


    return (
    <Scroll
        width={this.props.width}
        height={this.props.height}

        // THIS ALLOWS THE SCROLL VIEW TO JUMP BACK TO TOP ON CHANGE,
        // HAS TO BE NEW NUMBER OR REACT WON'T PASS IT
        contentOffsetY={this.props.dataObjectfromAPI.length/1000}  
        overflow={'hidden'}
      >
        <Frame name={'wrapper'} height={100* this.props.dataObjectfromAPI.length} width={300} top={0}>
            <Stack width={'100%'} height={'100%'} distribution={'start'} align={'center'} direction={'vertical'} gap={0} padding={0}>
                {this.cardArray}
            </Stack>
        </Frame>
    </Scroll>

    )
  }

  createCards() {
      var starterColor = Color('#55CCFF')


      this.cardArray = []
      for (let index = 0; index < this.props.dataObjectfromAPI.length; index++) {
        const element = this.props.dataObjectfromAPI[index];
        const newColor = Color.darken(starterColor, 6 * index)

        this.cardArray.push(
          <M_card background={newColor} Card_Text={element} height={100} width={300} key={'card'+index}></M_card>
        )        
      }
    }



  static defaultProps: Props = {
    dataObjectfromAPI: data.dataObjectfromAPI,
    height: data.cardheight,
    width: 300,
  };
}