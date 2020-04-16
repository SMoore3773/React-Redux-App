import React, {useState}from 'react';
import {connect} from 'react-redux';
import {fetchData, searchData} from '../actions/actionsIndex';
import SlipRender from './slipRender';
import '../App.css';

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
            <button className='randomAdvButton' onClick={()=>props.fetchData()}>Get Some Advice!</button>
            <form className='searchForm'>
                <input className='searchInput' onChange={handleChanges} type='text'/>
                <button className='searchButton' type='submit' onClick={handleSubmit}>Search For Advice</button>
            </form>
            <div className='slipMap'>{props.slip.map(slip=><SlipRender key={slip.id} slip={slip}/>)}</div>
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