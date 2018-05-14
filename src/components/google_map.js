import React, { Component } from 'react'

export default class GoogleMap extends Component {
    constructor(props) {
        super()
    }
    componentDidMount(){
        
        new google.maps.Map(this.refs.map, {
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            zoom: 12
        })
    }

    render() {
        return(
            <div ref="map" className="google-map"></div>
        )
    }
}