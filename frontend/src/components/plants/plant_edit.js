import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { ImLeaf } from 'react-icons/im';

class EditPlant extends React.Component {
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
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleChange = (selectedOption) => {
    this.setState({ type: selectedOption.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePlant(this.state)
      .then(this.props.history.push(`/user/${this.props.userId}`))
  }


  render() {
    let { name, info, species, type } = this.state;
    console.log(this.props.plant)
    console.log(this.state)
    console.log(name, info, species, type)

    return (
      <div className="container-fluid">
        <div className='d-flex justify-content-center space-above'>
            <Link to='/'>
              <h1 className='title'>
                PlantPress<span className='leaf-icon'><ImLeaf/></span>&nbsp;&nbsp;
              </h1>
            </Link>&nbsp;&nbsp;
        </div>

        <form className='session-form' onSubmit={this.handleSubmit}>
            <div className='d-flex justify-content-center'>
              <h2 className='subtitle'>Edit Plant</h2>
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Edit your plant name"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding form-margin'>
              <div className='pos-relative custom-select'>
                <div className='d-flex justify-content-center'><h3>Edit Plant Type</h3></div>
                <Select onChange={this.handleChange} options={this.options} styles={this.customStyles} />

              </div>
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={this.state.species}
                onChange={this.update('species')}
                placeholder="Species (Optional)"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding'>
              <input type="text"
                value={this.state.info}
                onChange={this.update('info')}
                placeholder="Short Bio (Optional)"
                className='session-input'
              />
            </div>

            <div className='d-flex justify-content-center form-padding form-margin'>
              <button className='session-button'>Edit Plant!</button>
            </div>

          </form>


      </div>
    )
  }

}

export default EditPlant;