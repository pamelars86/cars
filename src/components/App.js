import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: [] } 
    //define callback function

    // 1st way to treat a response - using promises with '.then'
   /* onSearchSubmit(term){
        console.log(term);
        //End point: GET search/photos
        // 1st argument: address, URL
        // 2nd argument: configure request - object that will have a bunch of options to customize
        axios.get('https://api.unsplash.com/search/photos',{
            //authorization
            params:{
                query: term
            },
            headers:{
                Authorization: 
                    'Client-ID 3d58a63aa5097e6c431bacbb34c0266cb8264d77dd283fe3cb83f248e864f4dc'
            }
        }).then((response)=>{
            console.log(response.data.results);
        });
    }*/

    // 2nd way - using keyword 'async'
    onSearchSubmit = async (term) => {
        console.log(term);
            const response = await unsplash.get('/search/photos',{
            //authorization
            params:{
                query: term
            },
        });

        this.setState({ images: response.data.results })
    }


    render(){ 
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;