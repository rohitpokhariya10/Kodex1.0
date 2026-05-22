import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  console.log("File-->", file);
  console.log("Files-->", files);

  const fileSendHandler = async () => {
    try {
      if (!file) {
        alert("Please choose a file first");
        return;
      }

      const formData = new FormData();

      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:3000/api/v1/uploads/image",
        formData,
      );

      console.log("Upload success:", response.data);
    } catch (error) {
      console.log("Upload error:", error.response?.data || error.message);
    }
  };

  const multipleFilesHandler = async () => {
    try {
      if (!files) {
        alert("Please choose a file first");
        return;
      }

      const formData = new FormData();

      files.forEach((file) => formData.append("images", file));

      const response = await axios.post(
        "http://localhost:3000/api/v1/uploads/images",
        formData,
      );

      console.log("Upload success:", response.data);
    } catch (error) {
      console.log("Upload error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="top">
      <div className="page-heading">
        <span className="eyebrow">Upload panel</span>
        <h1>File Uploader</h1>
      </div>

      <div className="wrapper">
        <div className="single-file">
          <div className="card-header">
            <p className="card-title">Single File</p>
            <span className="card-badge">One image</span>
          </div>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          {file?.name && (
            <h1 className="current-file">Selected: {file.name}</h1>
          )}
          <button onClick={fileSendHandler}>Send</button>
        </div>

        <div className="multiple-file">
          <div className="card-header">
            <p className="card-title">Multiple Files</p>
            <span className="card-badge">Batch upload</span>
          </div>

          {/* Because e.target.files is not a real JavaScript Array.It is a browser object called FileList */}
          <input
            type="file"
            multiple
            onChange={(e) => setFiles([...e.target.files])}
          />
          {files.length > 0 && (
            <div className="file-list">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <p className="file-name">{file.name}</p>
                  <div className="file-meta">
                    <span>{file.size} bytes</span>
                    <span>{file.type || "Unknown type"}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={multipleFilesHandler}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
