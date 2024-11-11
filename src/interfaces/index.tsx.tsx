export interface IIcon extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export interface IFileTree {
  name: string;
  isFolder: boolean;
  children?: IFileTree[]; //! only for folders
  content?: string; //! only for files
}
