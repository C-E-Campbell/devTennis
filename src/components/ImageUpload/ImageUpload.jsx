import React, { useRef, useState, useEffect } from "react";
import "./ImageUpload.module.scss";
import axios from "axios";
export default function ImageUpload(props) {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = event => {
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    //props.onInput(props.id, pickedFile, fileIsValid);
  };
  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      await axios.post("/api/addimage", formData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        ref={filePickerRef}
        type="file"
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={event => pickedHandler(event)}
      />
      <div>
        <div>
          {<img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>

        <button onClick={() => pickImageHandler()}>Select Image</button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
      <div>
        <button onClick={() => uploadPhoto()}>Upload Photo</button>
      </div>
    </div>
  );
}
