import React from 'react';

const Action=(props)=>(
    
        <div>
        
        <button
        className='big-button'
        onClick={props.handlePicker} 
        disabled={!props.isData}>
        What should i do?
        </button>
        
        </div>
)


export default Action;