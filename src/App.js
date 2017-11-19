import React, { Component } from 'react';
// import logo from './logo.svg';
import TopicContainer from "./TopicContainer"
import NewTopic from "./NewTopic"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
      {
        title: "Title 1",
        description: "Description of 1st topic",
        vote: 1
      },
      {
        title: "Title 2",
        description: "Description of 2nd topic",
        vote: 9
      },
      {
        title: "Title 3",
        description: "Description of 3rd topic",
        vote: 4
      }
      ] 
    }
  };

  //Add new topic to state 
  submitTopic = (data) => {
    this.setState({
      topics: this.state.topics.concat(data)
    });
  };

  //Increase vote by 1 and sort
  upvote = (title) => {
    this.setState({
      topics : this.state.topics.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote +1,
          });
        } else {
          return topic;
        }
      })
    })
  }

  //Function to decrease the vote by 1
  downvote = (title) => {
    this.setState({
      topics : this.state.topics.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote - 1,
          });
        } else {
          return topic;
        }
      })
    })
  }

  //Sorting function. Will be used as the parameter for sorting in .sort()
  comparator = (first, second) => {
    if(first.vote < second.vote){
      return 1;
    }
    if(first.vote > second.vote){
      return -1;
    }
    else {
      return 0;
    }
  }
  
  render() {
    const topicsorted = this.state.topics;
    topicsorted.sort(this.comparator);
    return (
      <div>
        <NewTopic submitTopic={this.submitTopic} />
        <TopicContainer topics={topicsorted} upvote={this.upvote} downvote={this.downvote} />
      </div>
    );
  }
}

export default App;
