import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from "next/link";
import Router from "next/router";



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  textFieldd: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    width: 896,
  },
  textFieldd2: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    width: 240,
  },
  textFielddd: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    width: 900,
  },
  dense: {
    marginTop: 19,
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
  },
  menu: {
    width: 300,
  },
  menu2: {
    width: 272,
  },
  typography: {
    marginTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 5,
  },
  button: {
    display: 'block',
    margin: theme.spacing.unit * 2,
  },

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  upload: {
    marginTop: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 5,
    width: 300,
  },
  buttons: {
    textAlign: 'center'
  },
  button: {
    flexWrap: 'wrap',
    margin: '40px 10px',
  },

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const models = [
  'K4',
  'K11',
  'UG5',
  'JU',
  'JL',
];

class Form extends React.Component {
  state = {
    // Data: {
    // },
    product: "",
    family: "",
    one_liner: "",
    details_of_changes: "",
    name: "",
    category: "",
    cause_of_changes: "",
    types_of_changes: "",
    category_of_changes: "",
    document: "",
    model: [],
    plant: "",
    open: false,
    scroll: 'paper',
    pic: ""
  };

  // handleChangeSelect = event => {
  //   this.state.Data = { ...this.state.Data }
  // };

  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  // handleChangeSelect(event) {
  //   this.setState({plant: event.target.value});
  // }

  handlePreview = () => {
    this.setState({
      ...this.state,
      open: true,
    })
  }

  handleSubmit = () => {
    this.setState({
      ...this.state,

    })
  }
  handleClose = () => {
    this.setState({ open: false });
  };




  render() {

    const { classes, theme } = this.props;

    return (
      <div>
        <form action='#' onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            id="plant"
            name="plant"
            label="Plant"
            className={classes.textField}
            value={this.state.plant}
            onChange={this.handleChangeSelect}
            margin="normal"
          />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category_1">Category</InputLabel>
            <Select
              // open={this.state.open}
              // onClose={this.handleClose}
              // onOpen={this.handleOpen}
              value={this.state.category}
              onChange={this.handleChangeSelect}
              className={classes.menu}
              placeholder="Please Select Category option"
              inputProps={{
                name: 'category',
                id: 'category',
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Starter Motor">Starter Motor</MenuItem>
              <MenuItem value="CDI">CDI</MenuItem>
              <MenuItem value="Instrument Cluster">Instrument Cluster</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            id="product"
            label="Product"
            name="product"
            className={classes.textField}
            value={this.state.product}
            onChange={this.handleChangeSelect}
            margin="normal"
          />
          <TextField
            id="family"
            label="Family"
            name="family"
            className={classes.textField}
            value={this.state.family}
            onChange={this.handleChangeSelect}
            margin="normal"
          />
          <br />
          {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="model">Model</InputLabel>
          <Select
            multiple
            className={classes.menu}
            value={this.state.model}
            onChange={this.handleChangeSelectSelect}
            input={<Input id="model" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {models.map(model => (
              <MenuItem key={model} value={model}>
                <Checkbox checked={this.state.model.indexOf(model) > -1} />
                <ListItemText primary={model} />
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}


          <Typography variant="h6" gutterBottom component="h2" className={classes.typography}>
            Process Selected
        </Typography>

          <TextField
            id="one_liner"
            label="One-liner Changes Statement"
            name="one_liner"
            className={classes.textFieldd}
            value={this.state.one_liner}
            onChange={this.handleChangeSelect}
            margin="normal"
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="cause_of_changes">Cause of Changes</InputLabel>
            <Select
              // open={this.state.open}
              // onClose={this.handleClose}
              // onOpen={this.handleOpen}
              value={this.state.cause_of_changes}
              onChange={this.handleChangeSelect}
              className={classes.menu2}
              inputProps={{
                name: 'cause_of_changes',
                id: 'cause_of_changes',
              }}
            >
              <MenuItem value="starter Motor">Starter Motor</MenuItem>
              <MenuItem value="CDI">CDI</MenuItem>
              <MenuItem value="Istrument Cluster">Instrument Cluster</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="types_of_changes">Types of Changes</InputLabel>
            <Select
              // open={this.state.open}
              // onClose={this.handleClose}
              // onOpen={this.handleOpen}
              value={this.state.types_of_changes}
              onChange={this.handleChangeSelect}
              className={classes.menu2}
              inputProps={{
                name: 'types_of_changes',
                id: 'types_of_changes',
              }}
            >
              <MenuItem value="starter Motor">Starter Motor</MenuItem>
              <MenuItem value="CDI">CDI</MenuItem>
              <MenuItem value="Instrument Cluster">Instrument Cluster</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category_of_changes">Category of Changes</InputLabel>
            <Select
              // open={this.state.open}
              // onClose={this.handleClose}
              // onOpen={this.handleOpen}
              value={this.state.category_of_changes}
              onChange={this.handleChangeSelect}
              className={classes.menu2}
              inputProps={{
                name: 'category_of_changes',
                id: 'category_of_changes',
              }}
            >
              <MenuItem value="starter Motor">Starter Motor</MenuItem>
              <MenuItem value="CDI">CDI</MenuItem>
              <MenuItem value="Instrument Cluster">Instrument Cluster</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Details of change"
            name="details_of_changes"
            multiline
            rows="5"
            // defaultValue="Default Value"
            className={classes.textFielddd}
            margin="normal"
            variant="outlined"
            value={this.state.details_of_changes}
            onChange={this.handleChangeSelect}
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="document">Document</InputLabel>
            <Select
              // open={this.state.open}
              // onClose={this.handleClose}
              // onOpen={this.handleOpen}
              value={this.state.document}
              onChange={this.handleChangeSelect}
              className={classes.menu}
              inputProps={{
                name: 'document',
                id: 'document',
              }}
            >
              <MenuItem value="starter Motor">Starter Motor</MenuItem>
              <MenuItem value="CDI">CDI</MenuItem>
              <MenuItem value="Instrument Cluster">Instrument Cluster</MenuItem>
            </Select>
          </FormControl>

          <input className={classes.upload} type="file" name="pic" accept="image/*" valu></input>

          <Dialog
            open={this.state.open}
            // onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">Preview</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please Confirm as per your order
            </DialogContentText>
              Plant: {this.state.plant} <br />
              Product: {this.state.product}<br />
              Family: {this.state.family}<br />
              One Liner: {this.state.one_liner}<br />
              Details of Changes: {this.state.details_of_changes}<br />
              Category: {this.state.category}<br />
              Cause of Changes: {this.state.cause_of_changes}<br />
              Types of Changes: {this.state.types_of_changes}<br />
              Category of Changes: {this.state.category_of_changes}<br />
              Document: {this.state.document}<br />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">Edit</Button>
              <Button onClick={this.handleClose} color="primary">Done</Button>
              {/* <Link href="/Done"><a>Done</a></Link>
              <Button onClick={() => Router.push("/Done")}> Go to Final Page </Button> */}

            </DialogActions>
          </Dialog>
          <div className={classes.buttons}>
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.handlePreview}>Preveiw</Button>
            <Button type="submit" variant="outlined" color="primary" className={classes.button} >
              Raise PCRN
           </Button>
          </div>
        </form>

      </div>

    );
  }
}

export default withStyles(styles)(Form);