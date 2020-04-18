import React, {Component} from 'react';
import {robots} from './robots';
import Cardlist from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }



    render(){
        const filtered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className = 'tc'>
                <h1 className = 'tc bg:white'>ROBOFRIENDS</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots = {filtered}/>
                </Scroll>
    
            </div>
        );
    }
}
export default App;
