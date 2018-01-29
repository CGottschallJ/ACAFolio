import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";
import {deleteActivity} from "../actions";
// import { deleteAddress } from "../actions";

function mapStateToProps(state) {

  //sees state object properly but state is empty.

  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteActivity: function(id){
      console.log("ContainerID:", id);
      dispatch(deleteActivity(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
