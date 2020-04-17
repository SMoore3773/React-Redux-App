import React from 'react';
import '../App.css'

const SlipRender = props =>{
    
    return(
        <div className='slipArray'>
            <p className='slip'>{props.slip}</p>
        </div>
    )
}

export default SlipRender;