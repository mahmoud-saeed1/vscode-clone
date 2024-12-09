import React from 'react';
import { VsCode } from './SVG'; // Assuming you have an SVG component for the logo

const WelcomeTab = () => {
    return (
        <div className="welcome-tab h-full flex flex-col items-center justify-center p-6">
            <div className="welcome-tab__logo">
                <VsCode />
            </div>
            <h1 className="welcome-tab__title">Welcome to VS Code</h1>
            <p className="welcome-tab__subtitle">Get started by opening a folder or creating a new file.</p>
            <div className="welcome-tab__actions flex space-x-4 mt-4">
                <button className="welcome-tab__button">Open Folder</button>
                <button className="welcome-tab__button">New File</button>
            </div>
            <div className="welcome-tab__recent-files mt-6">
                <h2 className="welcome-tab__recent-files-title">Recent Files</h2>
                <ul className="welcome-tab__recent-files-list">
                    <li className="welcome-tab__recent-file">project1.js</li>
                    <li className="welcome-tab__recent-file">project2.tsx</li>
                    <li className="welcome-tab__recent-file">notes.md</li>
                </ul>
            </div>
        </div>
    );
};

export default WelcomeTab;