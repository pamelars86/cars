import React from 'react';


class SearchBar extends React.Component {
    state = { term: ''}
    
    // 1st way to solve context 'this' issue
  /*  constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }*/
    
    // this method gets called anytime someone types on searchbar
    /*onInputChange(event){
        // contain the text that the user just added to our input
        console.log(event.target.value)
    }*/

   /* onFormSubmit(event){
        //THis line of code is to keep the form or the browser 
        // from trying to submit the form automatically and refresh the page
        event.preventDefault();
        console.log(this.state.term);
    }*/

    // 2nd way to solve context 'this' issue: arrow function
   onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                 {/*3rd way to solve context*/}
                 { /*<form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">*/}

                    <div className="field">
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e)=> this.setState({term: e.target.value})}
                            //onChange={(event) => console.log(event.target.value) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;