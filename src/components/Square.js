import React, { Component } from 'react'

export default class Square extends Component {
    render() {
        return (
            <div onClick={()=>this.props.onClick()} style={{width: "200px", height: "200px", border: "2px solid green", fontSize: "20px"}}>
                {this.props.value}
            </div>
        )
    }
}
