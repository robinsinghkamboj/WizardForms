import { Container } from "unstated";

class DetailsContainer extends Container {
  state = {
    details: [{
      name: 'John Maxwell',
      email: 'john@yahoo.com'
    },
    {
      name: 'David Warner',
      email: 'david@gmail.com'
    }],
    name: "",
    email: ""
  };

  handleDeleteDetail = detail => {
    this.setState({
      details: this.state.details.filter(c => c !== detail)
    });
  };

  handleInputChange = event => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleAddDetails = event => {
    event.preventDefault();
    var data = {name: this.state.name, email: this.state.email}
    this.setState(({ details }) => ({
      details: details.concat( data )
    }));
    this.setState({ name: "", email: "" });
  };
}

export default DetailsContainer;
