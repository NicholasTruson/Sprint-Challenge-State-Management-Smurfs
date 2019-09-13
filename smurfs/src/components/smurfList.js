import React from 'react';
import { connect } from 'react-redux';


import { getData } from '../actions/smurfActions';

import SmurfCard from '../components/smurfCard';

const smurfList = props => {
  return (
    <div>
      
      {props.smurfs &&
        props.smurfs.map(smurf => <SmurfCard key={smurf.id} SmurfList={smurf} />)}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs


    
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(smurfList);