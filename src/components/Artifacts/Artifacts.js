import React from "react";
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

import Artifact from "./Artifact/Artifact";


const Artifacts = ({setCurrentId}) => {
  const classes = useStyles();
  const artifacts = useSelector((state)=> state.artifacts);

  return (!artifacts.length ? (<h1>No results</h1>):(
    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
          {artifacts.map((artifact)=>(
            <Grid key={artifact._id} item xs={12} sm={6}>
              <Artifact artifact={artifact} setCurrentId={setCurrentId}/>
            </Grid>
          ))}
    </Grid>
  ))
};

export default Artifacts;