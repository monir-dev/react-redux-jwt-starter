import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";

class Dashboard extends Component {
  componentDidMount() {
    //this.props.getCurrentProfile();
  }

  onDeleteButtonClick = e => {
    //this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const profile = null;
    const loading = null;
    // const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile != null || loading != null) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.User.name}</p>
          <p>You have not yet setup a profile, please add some info.</p>
          <Link to="/create-profile" className="btn btn-md btn-info">
            Create Profile
          </Link>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Dashboard</h1>
          {dashboardContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
