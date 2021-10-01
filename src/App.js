import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import FriendList from './FriendList'
import PropsPage from './PropsPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
    friends: [{id:1,name:"Joe"},{id:2,name:"Fred"},{id:3,name:"Anne"},{id:4,name:"Liz"}]
  }
}

  render() {
    return (
      <Router>
        <div id="app">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/props-through-render" render={(props) =>       <PropsPage {...props} title={'Props through render'} />} />
          <Route       path="/fourth/"       render={(renderProps) => {
                                                                return <FriendList {...renderProps} friends={[{id:1,name:"something"},{id:2,name:"Food"},{id:3,name:"Drink"},{id:4,name:"Clothes"}]}/>}} />
          
          <Route
                exact path='/friends/'
                render={(props) =>  <FriendList {...props} friends={this.state.friends}/>}
           />
        </div>
      </Router>
    )
}
}
export default App;
