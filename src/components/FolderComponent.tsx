import React from "react";
import { ClosedFolder, RightArrow } from "./SVG/File";

const FolderComponent = ({ folderName }: { folderName: string }) => {
  return (
    <div>
      <div className="flex items-center">
        <RightArrow className="w-4 h-4"/>
        <span className="mr-2">
          <ClosedFolder />
        </span>

        <span className="text-white font-semibold tracking-wider">
          {folderName}
        </span>
      </div>
    </div>
  );
};

export default FolderComponent;
