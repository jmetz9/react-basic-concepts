import React, { Component } from 'react';

class NewWord extends Component{
    state = {
        showForm: false,
        country: '',
        gold: 0
    }
    toggleForm = () => {
        const { showForm } = this.state;
        this.setState({ showForm : !showForm });
        if (showForm) {
          this.setState({ country: '', gold: 0 });
        }
      }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
    saveCountry = () => {
        const { country, gold } = this.state;
        this.props.onAdd(country, gold);
        this.toggleForm();
      } 
    render(){
        const { showForm, country, gold } = this.state;
        return(
        <div className='New-country'>
            {
                (showForm) ?
                <form>
                <input type="text" 
                id="country"
                placeholder="Country Name"
                autoFocus
                autoComplete='off'
                name="country"
                value={ country }
                onChange={ this.handleChange }/>
                <button 
                disabled={ country.trim().length === 0 } 
                onClick={ this.saveCountry } 
                type="button">
                Save
              </button>
                <button onClick={this.toggleForm} type="button">Cancel</button>
                </form>
                :
                <span onClick={this.toggleForm} className='Toggle-form'>New Country</span>
            }
            
        </div>
        )
        
    }
}

export default NewWord;