import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";

import { deleteActivity, populateComments } from "../actions";
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
      dispatch(deleteActivity(id));
    },
    populateComments: function(comments) {
      dispatch(populateComments(comments));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
