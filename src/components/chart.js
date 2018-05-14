import React, { Component } from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default (props) => {
    return(
        <div>
            <Sparklines data={props.data} width="180" height="120">
                <SparklinesBars color={props.color} />
            </Sparklines>
        </div>
    )
}