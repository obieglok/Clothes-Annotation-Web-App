import React from "react";

const Contact = () => {
  return (
    <div className="container userpage marginFromFooter center">
      <h5 className="center-align">Contact Details Below</h5>
      <div className="row cardsAboutContact">
        <div >
          <div className="card cardSettings">
            <thead>
              <tr>
                <th> Supervisor</th>
              </tr>
            </thead>

            <table className="centered">
              <tr>
                <td>
                  <i className="material-icons centre">person</i>
                </td>
                <td>
                  <span className="right">Mohammed Al-Rawi</span> <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="material-icons centre">email</i>
                </td>
                <td>
                  <span className="right"> al-rawim@tcd.ie</span>{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
