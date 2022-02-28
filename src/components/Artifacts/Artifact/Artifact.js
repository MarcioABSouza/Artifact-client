import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteArtifact } from "../../../actions/artifacts";

const Artifact = ({ artifact, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={artifact.selectedFile}
        title={artifact.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{artifact.owner}</Typography>
        <Typography variant="body2">
          {moment(artifact.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(artifact._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary"></Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {artifact.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" collor="primary" onClick={()=> dispatch(deleteArtifact(artifact._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Artifact;
