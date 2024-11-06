import React from "react";
import { File, RightArrow } from "./SVG/File";

const FileComponent = ({ fileName }: { fileName: string }) => {
  return (
    <div>
      <div className="flex items-center">
        <RightArrow className="w-4 h-4" />
        <span className="mr-2">
          <File />
        </span>

        <span className="text-white font-semibold tracking-wider">
          {fileName}
        </span>
      </div>
    </div>
  );
};

export default FileComponent;
