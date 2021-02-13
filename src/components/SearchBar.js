import React from 'react';

class SearchBar extends React.Component{
    state= {term : ''};
    onEventChange = (event) =>{
        //when event is changed, set the event to state so it can be displayed on screen 
        this.setState({term:event.target.value});
    };
    onFormSubmit= event => {
        //Prevent page from refreshing when enter is pressed 
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        onChange={this.onEventChange}
                        value= {this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;