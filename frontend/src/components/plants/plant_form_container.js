import { connect } from "react-redux";
import { createPlant } from "../../actions/plant_actions";
import PlantForm from "./plant_form";

const mapStateToProps = (state) => ({
  plant: {
    name: "",
    type: "",
    info: "",
    species: "",
  },
  currentUserId: state.session.user.id,
  errors: state.errors.plantErrors
});

const mapDispatchToProps = (dispatch) => ({
  createPlant: (plantForm) => dispatch(createPlant(plantForm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantForm);
