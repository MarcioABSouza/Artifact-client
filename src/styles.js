import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container:{
    backgroundColor:'ghostwhite'
  },
  appBar: {
    borderRadius: 3,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#9b59b6',
  }
}));