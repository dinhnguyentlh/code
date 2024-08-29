import React, { useState } from "react";
import {
  useDropzone,
  FileRejection,
  FileWithPath,
  Accept,
} from "react-dropzone";
import ReactPlayer from "react-player";

interface VideoUploadProps {
  onVideoSelected: (file: File) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoSelected }) => {
  const [videoFile, setVideoFile] = useState<string | null>(null);

  const accept: Accept = {
    "video/*": [],
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: (acceptedFiles: FileWithPath[]) => {
      const file = acceptedFiles[0];
      setVideoFile(URL.createObjectURL(file));
      onVideoSelected(file);
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #888",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop a video file here, or click to select one</p>
      </div>
      {videoFile && <ReactPlayer url={videoFile} controls={true} />}
    </div>
  );
};

export default VideoUpload;
