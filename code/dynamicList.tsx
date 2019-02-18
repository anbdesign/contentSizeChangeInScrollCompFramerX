import * as React from "react";
import { PropertyControls, ControlType, Frame, Stack, Data, Animatable, Override, Color } from "framer";

import {M_card} from "./canvas"

export const data = Data({ 
  numberOfCards: Animatable(1),
  dataObjectfromAPI: [
    'card 01',
    'card 02',
    'card 03',
    'card 04',
  ]
})



export const updateNumOfCards: Override = () => {
  // console.log(data.dataObjectfromAPI)

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


    // console.log(this.cardArray)
    return (

    <Frame name={'wrapper'} height={100* this.props.dataObjectfromAPI.length} width={300}>
        <Stack width={'100%'} height={'100%'} distribution={'start'} align={'center'} direction={'vertical'} gap={0} padding={0}>
            {this.cardArray}
        </Stack>
    </Frame>

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
    height: (100 * data.dataObjectfromAPI.length),
    width: 300,
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    // text: { type: ControlType.String, title: "Text" },
  };
}
