import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
import './App.css';
class App extends React.Component{
    
    state= {videos: [],selectedVideo : null };
    onSearch= async (term)=>{
       const rensponse= await youtube.get('/search',{params :{q:term}});
     this.setState(
         {
             videos: rensponse.data.items,
            selectedVideo: rensponse.data.items[0]
            })
    };
    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    };
    componentDidMount(){
        this.onSearch('example')
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearch}/>
                <div className="ui grid">
                    <div className="ui row ">
                <div className="eleven wide collum"><VideoDetail video={this.state.selectedVideo}/></div>
                <div className="fivewide collum"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
                    </div>
                </div>
                </div>
        );
             
    }
}
export default App;