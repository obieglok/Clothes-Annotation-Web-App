import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="header">Contact Us</h1>
      <div className="row">
        <div className="col s12 m6">
          <div className="card cardSettings">
            <thead>
              <tr>
                <th> Contact ADAPT Centre</th>
              </tr>
            </thead>

            <table className="centered">
              <tr>
                <td>
                  <i className="material-icons centre">phone</i>
                </td>
                <td>
                  <span className="right">+353 1 896 1797</span> <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="material-icons centre">email</i>
                </td>
                <td>
                  <span className="right"> info@adaptcentre.ie</span>{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card cardSettings">
            <thead>
              <tr>
                <th> Contact Trinity College</th>
              </tr>
            </thead>
            <table className="centered">
              <tr>
                <td>
                  <i className="material-icons centre">phone</i>
                </td>
                <td>
                  <span className="right">+353 1 896 1000</span> <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="material-icons centre">email</i>
                </td>
                <td>
                  <span className="right"> info@trinity.com</span>{" "}
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
