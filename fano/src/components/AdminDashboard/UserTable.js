import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImages } from "../../store/actions/imageActions";
import { Redirect, withRouter } from "react-router-dom";

class UserTable extends Component {
  state = {
    file: "",
    name: "",
  };

  addRow(tableID) {
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var colCount = table.rows[0].cells.length;

    for (var i = 0; i < colCount; i++) {
      var newcell = row.insertCell(i);

      newcell.innerHTML = table.rows[0].cells[i].innerHTML;
      //alert(newcell.childNodes);
      switch (newcell.childNodes[0].type) {
        case "text":
          newcell.childNodes[0].value = "";
          break;
        case "checkbox":
          newcell.childNodes[0].checked = false;
          break;
        case "select-one":
          newcell.childNodes[0].selectedIndex = 0;
          break;
      }
    }
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container col s12 m6">
        <input
          type="button"
          value="Add row"
          onClick="addRow('dataTable')"
        />

        <table class="highlight" id="dataTable">
          <thead>
            <tr>
              <th>Email</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Annotations</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <label>
                  <input type="checkbox" class="filled-in" />
                  <span></span>
                </label>
              </td>
              <td>bogiatzi@tcd.ie</td>
              <td>Iraklis</td>
              <td>Bogiatziou</td>
              <td>2</td>
              <td>
                <select class="browser-default">
                  <option value="adm">Admin</option>
                  <option value="usr">User</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImages: (file) => dispatch(uploadImages(file)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserTable)
);
