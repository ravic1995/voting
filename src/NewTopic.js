import React, { Component } from 'react';

class NewTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:'',
      description: '',
      vote: 0,
    }
  }

  getTitle = (event) => {
    this.setState ({
      title: event.target.value
    });
  }

  getDescription = (event) => {
    this.setState ({
      description: event.target.value
    })

  }

  submitNew = () => { 
    if (this.state.title !== "") {
      this.props.submitTopic(this.state);
      this.setState({
        title:'',
        description: '',
        vote: 0
      });  
    }
    
  }

  render() {
    return (
      <div>
        <div style={{margin:"auto", align: "center", width: "60%", alignItems: "center", display: "flex", flexDirection: "column" }}>
          <p><strong>Title:</strong></p>
          <input style={{width:'100%', height:20, fontSize:'17px', borderRadius: "4px"}} onChange={this.getTitle} maxLength='150' placeholder="Enter your topic's title(max length 150 characters)" value={this.state.title}/>
          <p>Description:</p>
          <input style={{width:'100%',borderRadius: "4px", height:70, fontSize:'17px'}} onChange={this.getDescription} maxLength='255'placeholder="Enter your topic's description(max length 255 characters)" value={this.state.desc}/>
          <button type='submit'  style={{padding: '10px', marginTop: "10px", borderRadius: "4px"}} onClick={this.NewTopic}>Add NewTopic</button>
        </div>
        <hr/>
      </div>
    );
  }
}

export default NewTopic;
