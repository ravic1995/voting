import React, { Component } from 'react';

class NewTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { //this state is for one Object(topic)
      title:'',
      desc: '',
      vote: 0,
    }
  }

  //function to set title state equal to the input at textarea
  readTitle = (e) => {
    this.setState ({
      title: e.target.value
    })
  }

  //function to set desc state equal to the input at textarea
  readDesc = (e) => {
    this.setState ({
      desc: e.target.value
    })

  }

  //submit the object by using function which sent by the parent and then change the state to empty
  //set state to initial in order to make the textarea empty everytime we submit
  submitTopic = () => { 
    if (this.state.title !== "") {
      this.props.submitTopic(this.state);
      this.setState({
        title:'',
        desc: '',
        vote: 0
      });  
    }
    
  }

  render() {
    return (
      <div>
        <div>
          <p><strong>Title:</strong></p>
          <textarea style={{width:'100%', height:20, fontSize:'17px'}} onChange={this.readTitle} maxLength='150' placeholder="Enter your topic's title(max length 150 characters)" value={this.state.title}></textarea>
          <p>Description:</p>
          <textarea className="descriptionx" style={{width:'100%', height:70, fontSize:'17px'}} onChange={this.readDesc} maxLength='255'placeholder="Enter your topic's description(max length 255 characters)" value={this.state.desc}></textarea>
          <button type='submit' className="submitbutton" style={{padding: '10px', marginBottom:'10px'}} onClick={this.submitTopic}>Submit</button>
        </div>
      </div>
    );
  }
}

export default NewTopic;
