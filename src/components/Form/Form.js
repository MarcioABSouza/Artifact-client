import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { createArtifact, updateArtifact } from "../../actions/artifacts";


const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const artifact = useSelector((state)=> currentId ? state.artifacts.find((a) => a._id === currentId) : null);

  const [artifactData, setArtifactData]  = useState({ title:'', message:'', owner:'', local:'', tags:'', selectedFile:''})

  const dispatch = useDispatch();

  useEffect(()=>{
    if(artifact) setArtifactData(artifact);
  }, [artifact])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(currentId){
      dispatch(updateArtifact(currentId, artifactData));
    }else{
      dispatch(createArtifact(artifactData));
    }
    clear()
  }

  const clear = () =>{
    setCurrentId(null)
    setArtifactData({ title:'', message:'', owner:'', local:'', tags:'', selectedFile:''})
  }

  return (
    <Paper  className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography>{ currentId?'Lets change somenthing here!':'Creating a memory!'}</Typography>
        <TextField name='title'variant='outlined' label='Title' fullWidth value={artifactData.title} onChange={(e)=> setArtifactData({...artifactData, title: e.target.value})}/>
        <TextField name='message'variant='outlined' label='Message' fullWidth value={artifactData.message} onChange={(e)=> setArtifactData({...artifactData, message: e.target.value})}/>
        <TextField name='owner'variant='outlined' label='Owner' fullWidth value={artifactData.owner} onChange={(e)=> setArtifactData({...artifactData, owner: e.target.value})}/>
        <TextField name='local'variant='outlined' label='Local' fullWidth value={artifactData.local} onChange={(e)=> setArtifactData({...artifactData, local: e.target.value})}/>
        <TextField name='tags'variant='outlined' label='Tags' fullWidth value={artifactData.tags} onChange={(e)=> setArtifactData({...artifactData, tags: e.target.value})}/>
        
        <div className={classes.fileInput}>
        <FileBase type='file' multiple={false} onDone={({base64}) => setArtifactData({...artifactData, selectedFile: base64})}/>
        </div>

        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='large' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
};

export default Form;