import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopicContainer from "./TopicContainer"
import NewTopic from "./NewTopic"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [] // datas is array of Object
    }
  };

  //Function to add topic in our datas state
  submitTopic = (data) => {
    this.setState({
      datas: this.state.datas.concat(data)
    }, this.sorting);
  };

  //Function to increase the vote by 1
  upvote = (title) => {
    this.setState({
      datas : this.state.datas.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote +1,
          });
        } else {
          return topic;
        }
      })
    }, this.sorting)
  }

  //Function to decrease the vote by 1
  downvote = (title) => {
    this.setState({
      datas : this.state.datas.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote - 1,
          });
        } else {
          return topic;
        }
      })
    }, this.sorting)
  }

  //Sorting function. Will be used as the parameter for sorting in .sort()
  sortingformula = (a,b) => {
    if(a.vote < b.vote){
      return 1;
    }
    if(a.vote > b.vote){
      return -1;
    }
    else {
      return 0;
    }
  }

  //Function to sort objects in datas base on the number or vote
  sorting = () => {
    const dataSorted = this.state.datas;
    dataSorted.sort(this.sortingformula);
    
    this.setState({
      datas: dataSorted
    });
  }
  render() {
    return (
      <div className="App">
        <NewTopic submitTopic={this.submitTopic} />
        <TopicContainer topics={this.state.datas} upvote={this.upvote} downvote={this.downvote} />
      </div>
    );
  }
}

export default App;
