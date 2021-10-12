import React from 'react';
import axios from 'axios'

async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('/api/uploads/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      imageUrl: "",
      file: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const {file, description} = this.state;
    const result = await postImage({image: file, description})
    console.log(result);
    this.setState( {imageUrl: result.imagePath} )
  }

  fileSelected(e) {
    const file = e.target.files[0];
		this.setState( {file: file} );
	}

  setDescription (e) {
    this.setState({ description: e.target.value });
  }

  render () {
    const {description, images } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input onChange={this.fileSelected} type="file" accept="image/*"></input>
          <input value={description} onChange={e => this.setDescription(e) } type="text"></input>
          <button type="submit">Submit</button>
        </form> 
  
        { images.map( (image, i) => {
          return (
            <div key={i}>
              <img src={`/api/uploads/${image}`} alt="" width="400px" height="400px"></img>
            </div>
          )
        })}

        <img src="api/uploads/images/4b0dff7ab69504ced7786e2a0769c3a5" alt="" width="400px" height="400px"></img>

      </div>
    )
  }
}

export default PhotoForm;