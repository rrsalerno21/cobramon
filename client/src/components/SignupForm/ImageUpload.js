import React from "react";

// Works, but getting an 'error 500'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "cobra",
        // more upload options go here
        uploadPreset: "ygbcrqwo",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    widget.open();
  };
  render() {
    return (
      <div>
        <label htmlFor="Logo">Upload Logo (optional)</label>
        <button
          onClick={this.showWidget}
          id="upload_widget"
          className="cloudinary-button"
        >
          Choose Image
        </button>
      </div>
    );
  }
}

export default ImageUpload;
