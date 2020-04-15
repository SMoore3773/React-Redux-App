import React, {useState}from 'react';
import {connect} from 'react-redux';
import {fetchData, searchData} from '../actions/actionsIndex';
import SlipRender from './slipRender';

const Slip = props => {
    console.log('props in slip component', props)
    const [query, setQuery] = useState('')
    const handleChanges = e =>{
        setQuery(e.target.value)
    }
    const handleSubmit= e=>{
        e.preventDefault();
        props.searchData(query);
        
    }
    console.log('query in slip',query)
    console.log('props.slip in slip.js',props.slip)
    return(
        <div className='slipAdv'>
            <button onClick={()=>props.fetchData()}>Get Some Advice!</button>
            <form>
                <input onChange={handleChanges} type='text'/>
                <button type='submit' onClick={handleSubmit}>Search For Advice</button>
            </form>
            <p>{props.slip.map(slip=><SlipRender key={slip.id} slip={slip}/>)}</p>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        slip: state.slip,
        query: state.query
    };
};
export default connect(mapStateToProps, {fetchData, searchData})(Slip);