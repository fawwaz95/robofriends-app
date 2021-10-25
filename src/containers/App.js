import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import { robots } from '../robots.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //Call the robots API using fetch to return an Array of robot obejcts
    //Set it to the robots 'State'
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    //'onChange' function that is attached to the input field
    onSearchChange = (event) => {
        //Update the state when there is a value inside the searchfield
        this.setState({ searchfield: event.target.value });  
    }

    render() {
        //Deconstruct the 'this.state' attributes, save them in const variables
        const { robots, searchfield } = this.state;
        //filter through the robots array and return the robot that exists
        //within the array and searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //Waiting for the API to fill the robots array
        return robots.length === 0 ? 
             <div className='loadingMsg'>  Loading... </div> :
            (
                <div className='tc'>
                    <h1 className='robofriendsheader'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
}
export default App;