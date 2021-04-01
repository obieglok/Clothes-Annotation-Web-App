import React from "react";

const UserProfile = () => {
    return (
      <div className="userpage">
        <h5 class="center-align">Welcome back, username</h5>
        <div className="overview-card">
          <div class="row">
            <div class="col s12 m6">
              <div class="card teal lighten-2 hoverable">
                <div class="card-content white-text">
                  <span class="card-title">Overview</span>
                  <h6 class="left-align">Current Annotations: </h6>
                  <h6 class="left-align">Current Points: </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;
