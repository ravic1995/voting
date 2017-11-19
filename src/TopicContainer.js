//@flow
import React, { Component } from 'react';
import Topic from "./Topic.js";

type TopicType = {
  title: string,
  description?:string,
  vote: number,
};

type Props = {
  topics: Array<TopicType>,
  upvote: (string) => void,
  downvote: (string) => void,
};

class TopicContainer extends Component <Props> {
  render() {
    const topicsObject = this.props.topics.map((topic,key) => {
      return <Topic
        key={key}
        title= {topic.title}
        description = {topic.description}
        vote = {topic.vote}
        upvote = {this.props.upvote}
        downvote = {this.props.downvote}
      />
    });
    
    return (
      <div >
        {topicsObject.slice(0,20)}
      </div>
    );
  }
}

export default TopicContainer;
