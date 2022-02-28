import axios from 'axios';

const url = 'https://artifact-server-side.herokuapp.com/artifacts';

export const fetchArtifacts = () => axios.get(url);

export const createArtifact = (newArtifact) => axios.post(url, newArtifact);

export const updateArtifact = (id, updatedArtifact) => axios.patch(`${url}/${id}`, updatedArtifact);

export const deleteArtifact = (id) => axios.delete(`${url}/${id}`);