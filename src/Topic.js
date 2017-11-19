import React, { Component } from 'react';

class Topic extends Component {
  upvotes = () => {
    this.props.upvote(this.props.title)
  }
  downvotes = () => {
    this.props.downvote(this.props.title) 
  }
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title} </h2>
          <p>{this.props.desc} </p>
        </div>
        <div width="50%" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div onClick = {this.upvotes}> Upvote </div>
            <div style={{backgroundColor:'#AAA',padding:3, width: 20, height:20, textAlign:'center', margin:'auto', fontSize:20, marginBottom:4}} >
              {this.props.vote}
            </div>
            <div onClick = {this.downvotes}> Downvote </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Topic;
