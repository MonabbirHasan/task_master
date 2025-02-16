import React from "react";
import { ThreeCircles } from "react-loader-spinner";

interface DataLoaderProps {
  height: number;
  width: number;
}

const DataLoader: React.FC<DataLoaderProps> = ({ height, width }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeCircles color="var(--primary-color)" height={height} width={width} />
    </div>
  );
};

export default DataLoader;
