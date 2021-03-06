//@flow
import React, { Component } from 'react';
import up from "./up.svg";
import down from "./down.svg";

type Props = {
  title: string,
  vote: number,
  description?: string,
  upvote: (title: string) => void,
  downvote: (title: string) => void,
};

class Topic extends Component<Props> {
  upvotes() {
    this.props.upvote(this.props.title)
  }
  downvotes() {
    this.props.downvote(this.props.title) 
  }

  render() {
    return (
      <div>
        <div style={{width:"60%", margin: "auto",display: "flex"}}>
          <div style={{flexDirection: "column",  alignSelf:'center', width: "90%", "padding" : "10px" }}>
            <h2>{this.props.title} </h2>
            <p>{this.props.description} </p>
          </div>
          <hr/>
          <div style={{flexDirection: "column", jutifyContent:'center' , "padding": "10px" }}>
            <img alt="upvote icon" src={up} onClick = {() => {this.upvotes()}}/>
              <div styl={{alignSelf: "center"}}>
                {this.props.vote}
              </div>
            <img alt="downvote icon" src={down} onClick = {() => {this.downvotes()}}/> 
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Topic;
