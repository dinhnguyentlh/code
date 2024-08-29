import React, { useState, useRef, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

interface VideoCutterProps {
  videoFile: File | null; // Allow videoFile to be null
}

const VideoCutter: React.FC<VideoCutterProps> = ({ videoFile }) => {
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(10);
  const [loaded, setLoaded] = useState(false);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ffmpeg = useRef(new FFmpeg()).current;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);
  console.log("co day");
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

  // const transcode = async () => {
  //   if (!videoFile) {
  //     setError("Please upload a video file first.");
  //     return;
  //   }

  //   setError(null);
  //   setLoading(true);

  //   try {
  //     await ffmpeg.load();
  //     ffmpeg.FS("writeFile", "input.mp4", await fetchFile(videoFile));
  //     await ffmpeg.run(
  //       "-i",
  //       "input.mp4",
  //       "-c:v",
  //       "libx264",
  //       "-c:a",
  //       "aac",
  //       "-strict",
  //       "experimental",
  //       "output.mp4"
  //     );

  //     const data = ffmpeg.FS("readFile", "output.mp4");
  //     const url = URL.createObjectURL(
  //       new Blob([data.buffer], { type: "video/mp4" })
  //     );
  //     setOutputUrl(url);
  //   } catch (err) {
  //     setError("An error occurred during video processing.");
  //   }

  //   setLoading(false);
  // };
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
        startTime.toString(),
        "-to",
        endTime.toString(),
        "-c",
        "copy",
        "output.mp4",
      ]);

      console.log("Reading file from FFmpeg");
      const data = await ffmpeg.readFile("output.mp4");
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      // URL.createObjectURL(
      //   new Blob([data.buffer], { type: "video/mp4" })
      // );
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
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
        {loading ? "Processing..." : "cu cut file 123 test"}
      </button>
      {outputUrl && <video ref={videoRef} controls />}
      <p ref={messageRef}></p>
      <p>Open Developer Tools (Ctrl+Shift+I) to View Logs</p>
    </div>
  ) : (
    <p>Loading FFmpeg...</p>
  );
};

export default VideoCutter;
