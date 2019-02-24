import * as React from "react";
import { PropertyControls, ControlType, Frame, Stack, Data, Animatable, Override, Color, Scroll } from "framer";

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
  // console.log(data.dataObjectfromAPI)
  // now try passing the new height
  // console.log(data.cardheight)
  console.log(100 * data.dataObjectfromAPI.length)

  let newHeight = 100 * data.dataObjectfromAPI.length

  return {
    dataObjectfromAPI: data.dataObjectfromAPI,
    transform: `translate(0px, 0px)` ,
    // height: data.cardheight
    // height: newHeight
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



export const scrollSessionStart: Override = () => {
  return {
    onScrollSessionStart() {
        console.log('scroll session start')
      },
  }
}



const scrollStyles = { 
  transform: `translate(0px, 0px)` 
};



type Props = { 
  dataObjectfromAPI: Array<string>,
  height: number,
  width: number,
};


// ScrollProps 

export class _dynamicList extends React.Component<Props> {
  // constructor(props) {
  //   super(props);
  //   this.state        = {
  //     height: 400,
  //     width: 50,
  //   } ;
  //   this.handleChange = this.handleChange.bind(this);
  // }


  

  handleChange() {
    console.log('handle change')
  }


  cardArray = []

scrollProps = {
  width:this.props.width,
  height:this.props.height,
  overflow:'hidden'
}


  render() {
    console.log('re-render dynamic list')
    this.createCards()


    // console.log(this.cardArray)
    // borderWidth={this.props.dataObjectfromAPI.length}


    // contentOffsetY={this.props.dataObjectfromAPI.length/1000}

    return (
    <Scroll borderColor={'yellow'}  width={this.props.width} height={this.props.height} contentOffsetY={this.props.dataObjectfromAPI.length/1000}  overflow={'hidden'}
    >
        <Frame style={scrollStyles} name={'wrapper'} height={100* this.props.dataObjectfromAPI.length} width={300}>
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


    componentDidMount() {
      console.log('mount')
      // this.setState({
      //   styles: {
      //     top: computeTopWith(this.refs.child),
      //     left: computeLeftWith(this.refs.child)
      //   }
      // })
    },
    
    componentWillUnmount(){
      console.log('unmount')
    }


  static defaultProps: Props = {
    dataObjectfromAPI: data.dataObjectfromAPI,
    // height: (100 * data.dataObjectfromAPI.length),
    height: data.cardheight,
    width: 300,
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    // text: { type: ControlType.String, title: "Text" },
  };
}
