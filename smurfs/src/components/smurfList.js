import React, { Component } from 'react';
import { connect } from 'react-redux';


import { getData } from '../actions/smurfActions';

import SmurfCard from '../components/smurfCard';
/*
const smurfList = props => {
  return (

    <div>
        {getData};
{console.log(props)};;;
      {props.smurfs.map(smurf => <SmurfCard key={smurf.id} name={smurf.name} SmurfList={smurf} />)}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    name: state.name


  };
};
export default connect(
  mapStateToProps,
  { getData }
)(smurfList);
*/
//////////////////////////////////////////////////////////////////

class smurfList extends Component {
    componentDidMount() {
      this.props.getData();
    }
  
    render() {
      return (
        this.props.smurfs.map(smurf => <SmurfCard key={smurf.id} name={smurf.name} height={smurf.height} age={smurf.age} smurf={smurf} />)
      )
    }
  }
  
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    name: state.name
  })
  
  export default connect(
      mapStateToProps, 
      { getData }
      )(smurfList)