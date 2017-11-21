//@flow
import React, { Component } from 'react';
import TopicContainer from "./TopicContainer"
import NewTopic from "./NewTopic"

type TopicType = {
  title: string,
  description?:string,
  vote: number,
};

type State = {
  topics: Array<TopicType>,
};

type Props = {
};


class App extends Component<Props, State> {
  constructor(props: Props) {
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
  submitTopic = (data: TopicType) => {
    this.setState({
      topics: this.state.topics.concat(data)
    });
  };

  //Increase vote by 1 and sort
  //$flowFixMe
  upvote = (title: string) => {
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
  //$flowFixMe
  downvote = (title: string) => {
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
  comparator = (first: TopicType, second: TopicType) => {
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
