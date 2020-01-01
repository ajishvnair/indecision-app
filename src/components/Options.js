import React from 'react';
import Option from './Option';

const Options=(props)=>{
    return(
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__title'>Your options</h3>
        <button
        className='button button--link' 
        onClick={props.removeAll}>Remove All
        </button>
        </div>
        {!props.isData && <p className='widget__message'>Please add some texts!</p>}
           {props.options.map((option,index) => 
            <Option 
            key={option} 
            optionText={option}
            count={index+1}
            handleRemoveOption={props.handleRemoveOption}
            />)}
           
        </div>
    );
}

export default Options;