import { useState } from "react";
import "./App.css";
import { EditVideoPage, VideoUpload } from "./pages";
import VideoCutter from "./pages/public/VideoCutter/VideoCutter";

function App() {
  const [videoFile, setVideoFile] = useState<File | null>(null);

  return (
    <div className="App">
      <h1>Video Editor</h1>
      <VideoUpload onVideoSelected={(file) => setVideoFile(file)} />
      {videoFile && <VideoCutter videoFile={videoFile} />}
      <EditVideoPage />
    </div>
  );
}

export default App;
