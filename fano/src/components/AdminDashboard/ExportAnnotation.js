import React from "react";
import { connect } from "react-redux";
import { exportAnnotations } from "../../store/actions/imageActions";

export const ExportAnnotations = (props) => {
  return (
    <div className="container">
      <h5> CLick Below to Export All the Annotations 👇 </h5>
      <div class="row">
        <button
          className="btn waves-effect waves-light orange accent-3 annoateButtons"
          onClick={() => {
            console.log("clicked");
            props.exportAnnotations();
          }}
        >
          export annotation
        </button>
      </div>
      {props.annotationsJson && (
        <div class="row">
          <a
            className="btn waves-effect waves-light orange accent-4 annoateButtons"
            style={{ margin: 10 }}
            href={URL.createObjectURL(props.annotationsJson)}
            download="data.json"
          >
            DOWNLOAD DATA AS JSON
          </a>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  annotationsJson: state.image.annotationsJson,
  fetchedImage: state.image.fetchedImage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    exportAnnotations: () => {
      dispatch(exportAnnotations());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExportAnnotations);
