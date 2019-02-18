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
  console.log('OVERRIDE!!!!!!!!!!!!!!!!!!!!!!!')
  console.log('update on date change')
  console.log(data.dataObjectfromAPI)

  return {
    dataObjectfromAPI: data.dataObjectfromAPI,
  }
}


export const dataObjectOfOne: Override = () => {
  return {
      onTap() {
        data.dataObjectfromAPI = ['card 01']
        console.log(data.dataObjectfromAPI)
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
        console.log(data.dataObjectfromAPI)
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
        console.log(data.dataObjectfromAPI)
      },
  }
}



type Props = { 
  text: string,
  // numberOfCards: number,
  dataObjectfromAPI: Array<string>,
  // height: number,
  // width: number,
};

export class _dynamicList extends React.Component<Props> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataObjectfromAPIstate: ['foo']
  //   };
  // }


  // let container;
  // let containerHeight = this.props.cardHeight * this.state.calEvents.value.length
  // console.log('re-render scroll container')

  cardArray = []

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    console.log('re-render dynamic list')
    this.createCards()

    // this.props.height = 100* this.props.dataObjectfromAPI.length
    // console.log(this.props.height)
    // this.props.height = 400

    console.log(this.cardArray)
    return (
    //   <Frame top={0} height={containerHeight}>
    //   {this.createAllEventCards()}
    // </Frame>

    <Frame name={'wrapper'} height={100* this.props.dataObjectfromAPI.length} width={300}>
        <Stack width={'100%'} height={'100%'} distribution={'start'} align={'center'} direction={'vertical'} gap={0} padding={0}>
            {this.cardArray}
        </Stack>
    </Frame>

    )
  }

  createCards() {
      console.log('create cards')
      console.log(this.props.dataObjectfromAPI)
      console.log('^ props.dataObjectfromAPI')

      var starterColor = Color('#55CCFF')


      this.cardArray = []
      for (let index = 0; index < this.props.dataObjectfromAPI.length; index++) {
        const element = this.props.dataObjectfromAPI[index];
        const newColor = Color.darken(starterColor, 6 * index)

        console.log(element)       
        this.cardArray.push(
          <M_card background={newColor} Card_Text={element} height={100} width={300} key={'card'+index}></M_card>
        )        
      }
      console.log(this.cardArray)
    }




  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    text: "Hello World!",
    // numberOfCards: 1,
    dataObjectfromAPI: data.dataObjectfromAPI,
    // height: (100 * data.dataObjectfromAPI.length),
    // width: 300,
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    // numberOfCards: { type: ControlType.Number, title: "number of cards" }
  };
}
