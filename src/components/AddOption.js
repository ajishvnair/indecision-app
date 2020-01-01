import React from 'react';

class AddOption extends React.Component{
    state={
        error:undefined
    };
    
    handleAddOption=(e) => {
            e.preventDefault();
            
            let option=e.target.elements.option.value.trim();
            const error=this.props.handleAddOption(option);
            e.target.elements.option.value='';
            this.setState(()=>({error}))
    }
    render(){
        return(
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form  className="add-option" onSubmit={this.handleAddOption}>
                    <input type="text" className='add-option-input' name="option"/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;