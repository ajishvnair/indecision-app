import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }
    
    handleRemoveAll=() => {
        this.setState(()=>({options:[]}));
    };
    handleRemoveOption=(optionToRemove) => {
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=> option!==optionToRemove)
        }))
    };
    handlePicker=() => {
        let random=Math.floor(Math.random()*this.state.options.length);
        let option=this.state.options[random];
        //alert(option);
        this.setState(()=>(
            {
                selectedOption:option
            }
        ))
    };
    handleAddOption=(option) => {
        if(!option){
            return 'Enter a valid element';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Element alredy exists';
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
            
    };

    handleModalClose=()=>{
        this.setState(()=>(
            {
                selectedOption:undefined
            }
        ));
    };
    render(){
        const title='Indecision-app';
        const subtitle='Put your life on a computer.';
        
        return(
            <div>
            <Header title={title} subtitle={subtitle} />
                <div className='container'>
                
                <Action isData={this.state.options.length>0} handlePicker={this.handlePicker}/>
                <div className='widget'>
                <Options 
                isData={this.state.options.length>0}
                options={this.state.options} 
                removeAll={this.handleRemoveAll}
                handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose}/>
            </div>
        );
    }
componentDidMount(){
    try{
        const options=JSON.parse(localStorage.getItem('options'));
            if(options){
                this.setState(()=>({options}));
            }
        }
    catch(e){

    }

}
componentDidUpdate(prevProp,prevState){
   if(prevState.options.length!==this.state.options.length){
       const json=JSON.stringify(this.state.options);
       localStorage.setItem('options',json);
   }
}
}
export default IndecisionApp;