import React, { useState } from "react";

type ViewSize = "small" | "medium" | "large" | "fullscreen";

interface CameraDisplayProps {
  viewSize: ViewSize;
}

const CameraDisplay: React.FC<CameraDisplayProps> = ({ viewSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = getPageSize(viewSize);

  const cameras = Array.from({ length: 16 }, (_, i) => i + 1);

  const paginatedCameras = cameras.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function getGridClass() {
    switch (viewSize) {
      case "small":
        return "grid-cols-4 grid-rows-4";
      case "medium":
        return "grid-cols-2 grid-rows-2";
      case "large":
        return "grid-cols-1 grid-rows-1";
      default:
        return "grid-cols-4 grid-rows-4";
    }
  }

  function getPageSize(viewSize: ViewSize): number {
    switch (viewSize) {
      case "small":
        return 16;
      case "medium":
        return 4;
      case "large":
        return 1;
      default:
        return 16;
    }
  }

  function handlePrevious() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleNext() {
    setCurrentPage((prev) =>
      prev < Math.ceil(cameras.length / pageSize) ? prev + 1 : prev,
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className={`grid gap-4 ${getGridClass()} h-full w-full`}>
        {paginatedCameras.map((camera) => (
          <div
            key={camera}
            className="flex items-center justify-center rounded-lg border-2 border-gray-300"
          >
            Camera {camera}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CameraDisplay;
