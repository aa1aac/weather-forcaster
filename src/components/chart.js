import _ from 'lodash'
import React from 'react'
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'

const average =(data)=>{
    return _.round(_.sum(data)/data.length)
}

export default (props)=>{
    return(
        <div>
        <Sparklines height={100} width={150} data={props.data}>
              <SparklinesLine color={props.color}></SparklinesLine>
              <SparklinesReferenceLine type="avg"></SparklinesReferenceLine> 
        </Sparklines>
        <div>{average(props.data)+props.unit}</div>
        </div>
      
    )
}