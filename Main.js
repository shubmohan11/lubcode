import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component{
    render(){
      return(<div>
        <Title teetle="Title"/>
        <List tasks={ ['Take out the Trash','thssrt'] } />
        </div>
      )
    }
  }

  export default Main
  