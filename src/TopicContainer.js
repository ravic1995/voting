import React, { Component } from 'react';
import Topic from "./Topic.js";

class TopicContainer extends Component {
  render() {
    let topicstable = this.props.topics.map((topic,keys) => {
      return <Topic
        key = {keys} //uncomment this to make the topic unique
        title= {topic.title}
        desc = {topic.desc}
        vote = {topic.vote}
        upvote = {this.props.upvote}
        downvote = {this.props.downvote}
      />
    });

    return (
      //slice(0,20) to take 20 topics after sorted
      <div>
        {topicstable.slice(0,20)}
      </div>
    );
  }
}

export default TopicContainer;
