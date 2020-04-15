import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/actionsIndex';

const Slip = props => {
    console.log('props in slip component', props)
    return(
        <div className='slipAdv'>
            <button onClick={()=>props.fetchData()}>Get Some Advice!</button>
            <p>{props.slip}</p>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        slip: state.slip
    };
};
export default connect(mapStateToProps, {fetchData})(Slip);