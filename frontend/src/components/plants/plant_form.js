import React from 'react';

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.plant;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlant(this.state);
  }

  render() {
    let { name, type, info, species } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={name}
            onChange={this.update('name')}              
            placeholder="Name"
          />
          <select value={type} onChange={this.update("type")}>
            <option value="Unknown">Unknown</option>
            <option value="Flowering">Flowering</option>
            <option value="Succulent">Succulent</option>
            <option value="Foilage">Foilage</option>
            <option value="Tree">Tree</option>
            <option value="Fern">Fern</option>
            <option value="Unusual">Unusual</option>
          </select>
          <input type="text"
            value={species}
            onChange={this.update('species')}              
            placeholder="Species (optional)"
          />
          <input type="text"
            value={info}
            onChange={this.update('info')}              
            placeholder="Plant Bio (optional)"
          />
          <button>Add Plant</button>
        </form>
      </div>
    )
  }
}

export default PlantForm;