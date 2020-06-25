import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return { 
        searchField: state.searchRobots.searchField, 
        robots: state.requestRobots.robots,
        pending: state.requestRobots.pending,
        err: state.requestRobots.err
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }    
}

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, pending} = this.props;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                { pending ? <h1>Loading</h1> :
                  <ErrorBoundry>
                    <CardList robots={filterRobots} />
                  </ErrorBoundry>
                }
              </Scroll>
            </div>
          );
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);