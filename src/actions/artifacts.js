import * as api from '../api';

export const getArtifacts = () => async (dispatch) =>{

    try{
        const { data } = await api.fetchArtifacts();

        dispatch({type:'FETCH_ALL', payload:data});

    }catch(error){
        console.log(error.message)
    }
}

export const createArtifact = (artifact) => async (dispatch) =>{

    try{
        const { data } = await api.createArtifact(artifact);

        dispatch({type:'CREATE', payload:data});

    }catch(error){
        console.log(error.message)
    }
}


export const updateArtifact = (id, artifact) => async (dispatch) =>{
    try{
        const { data } = await api.updateArtifact(id, artifact);

        dispatch({type:'UPDATE', payload:data});
    }catch(error){
        console.log(error.message)
    }
}

export const deleteArtifact = (id) => async (dispatch) =>{
    try{
        await api.deleteArtifact(id);

        dispatch({type:'DELETE', payload: id});
    }catch(error){
        console.log(error.message)
    }
}