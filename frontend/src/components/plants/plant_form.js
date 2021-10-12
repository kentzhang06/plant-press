import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { ImLeaf } from 'react-icons/im';

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.plant;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.options = [
      {value: 'Fern', label: 'Fern'},
      {value: 'Flowering', label: 'Flowering'},
      {value: 'Foliage', label: 'Foliage'},
      {value: 'Succulent', label: 'Succulent'},
      {value: 'Tree', label: 'Tree'},
      {value: 'Unknown', label: 'Unknown'},
      {value: 'Unusual', label: 'Unusual'},
    ];
    this.customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'purple' : 'green',
        backgroundColor: state.isSelected ? 'lightgreen' : 'white'
      }),
      // control: () => ({
      //   width: 300
      // }),
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleChange = (selectedOption) => {
  this.setState({ type: selectedOption.value });
}

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlant(this.state);
  }

  render() {
    let { name, type, info, species } = this.state;

    return (
      <>
        <div className='container'>
          <div className='d-flex justify-content-center space-above'>
            <Link to='/'>
              <h1 className='title-dark'>
                PlantPress<span className='leaf-icon'><ImLeaf/></span>&nbsp;&nbsp;
              </h1>
            </Link>&nbsp;&nbsp;
          </div>

          <form className='session-form' onSubmit={this.handleSubmit}>
            <div className='d-flex justify-content-center'>
              <h2 className='subtitle'>Add a New Plant</h2>
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={name}
                onChange={this.update('name')}              
                placeholder="Name Your Plant"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding form-margin'>
              <div className='pos-relative custom-select'>
                <div className='d-flex justify-content-center'><h3>Select Plant Type</h3></div>
                <Select onChange={this.handleChange} options={this.options} styles={this.customStyles} />

              </div>
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={species}
                onChange={this.update('species')}              
                placeholder="Species (Optional)"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={info}
                onChange={this.update('info')}              
                placeholder="Short Bio (Optional)"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding form-margin'>
              <button className='session-button'>Add Plant!</button>
            </div>

          </form>

        </div>
      </>
    )
  }
}

export default PlantForm;