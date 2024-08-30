import React, { useState, useRef, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import ReactPlayer from "react-player";
import { Bar } from "../../../components";

interface VideoCutterProps {
  videoFile: File | null; // Allow videoFile to be null
}

const EditVideoPage: React.FC<VideoCutterProps> = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(10);
  const [loaded, setLoaded] = useState(false);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ffmpeg = useRef(new FFmpeg()).current;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);
  const [videoFile, setVideoFile] = useState();
  console.log("co day");
  console.log({ videoFile });
  useEffect(() => {
    const loadFFmpeg = async () => {
      console.log("co 1");
      try {
        const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";
        ffmpeg.on("log", ({ message }) => {
          if (messageRef.current) messageRef.current.innerHTML = message;
          console.log(message);
        });
        await ffmpeg.load({
          coreURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.js`,
            "text/javascript"
          ),
          wasmURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
          ),
          workerURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.worker.js`,
            "text/javascript"
          ),
        });
        console.log("thong qua");
        setLoaded(true);
      } catch (err) {
        console.log("co bug", err);
        setError("Failed to load FFmpeg.");
      }
    };

    loadFFmpeg();
  }, [ffmpeg]);

  const cutVideo = async () => {
    if (!videoFile) {
      setError("Please upload a video file first.");
      return;
    }

    if (endTime <= startTime) {
      setError("End time must be greater than start time.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      if (!ffmpeg) {
        throw new Error("FFmpeg is not initialized.");
      }

      console.log("Writing file to FFmpeg");
      await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

      console.log("Running FFmpeg command");
      await ffmpeg.exec([
        "-i",
        "input.mp4",
        "-ss",
        `${startTime}`,
        "-to",
        `${endTime}`,
        "-c",
        "copy",
        "output.mp4",
      ]);

      console.log("Reading file from FFmpeg");
      const data = await ffmpeg.readFile("output.mp4");
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      if (videoRef.current) {
        videoRef.current.src = url;
      }
      setOutputUrl(url);
    } catch (err: any) {
      setError(`An error occurred during video processing: ${err.message}`);
      console.error("Video processing error:", err);
    }

    setLoading(false);
  };

  return loaded ? (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <Bar /> */}
      <div>
        <label>Start Time (s):</label>
        <input
          type="number"
          value={startTime}
          onChange={(e) => setStartTime(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>End Time (s):</label>
        <input
          type="number"
          value={endTime}
          onChange={(e) => setEndTime(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={cutVideo} disabled={loading}>
        {loading ? "Processing..." : "Cat video"}
      </button>
      <input
        accept="video/*"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          setVideoFile(file);
          // onVideoSelected(file);
        }}
      />
      {outputUrl && <ReactPlayer url={outputUrl} controls />}
      {/* {outputUrl && <video ref={videoRef} src={outputUrl} controls />} */}
      {/* <p ref={messageRef}></p> */}
      {/* <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p> */}
    </>
  ) : (
    <p>Loading FFmpeg...</p>
  );
};

export default EditVideoPage;
