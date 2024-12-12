// components/RenderFileIcon.tsx
import React from 'react';
import { Icon } from '@iconify/react';
import { defaultFolderIcons, fileIconMappings, folderIconMappings } from '../mapping';

interface IFileIcon {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
  className?:string;
}

const FileIcon= ({ filename, isFolder = false, isOpen = false, className }:IFileIcon) => {
  const extension = filename.split('.').pop()?.toLowerCase();
  const folderName = filename.toLowerCase();

  if (isFolder) {
    const folderIcon = folderIconMappings[folderName] || (isOpen ? defaultFolderIcons.open : defaultFolderIcons.closed);
    return <Icon icon={folderIcon} width="24" height="24" color="#FFCC33" />;
  }

  const fileIconMaping = extension ? fileIconMappings[extension] : 'mdi:file-document-outline';
  return <Icon className={className} icon={fileIconMaping} width="24" height="24" color="#4A90E2" />;
};

export default FileIcon;
