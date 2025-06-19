import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }: { onFinish?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [split, setSplit] = useState(false);
  const [transformL, setTransformL] = useState(false);
  const [enlarge, setEnlarge] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSplit(true);
          setTimeout(() => setTransformL(true), 600);
          setTimeout(() => {
            setEnlarge(true);
          }, 1300);
          setTimeout(() => onFinish?.(), 2800);
        }
        return Math.min(prev + 5, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="top-line" />
      <div className="progress-text">{String(progress).padStart(3, "0")}</div>

      {!split ? (
        <div className="loading-bar">
          <div className="fill" style={{ width: `${progress}%` }} />
        </div>
      ) : (
        <div
          className={`bar-group ${transformL ? "to-L" : ""} ${enlarge ? "enlarge" : ""}`}
        >
          <div className="bar vertical" />
          <div className="bar horizontal" />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
