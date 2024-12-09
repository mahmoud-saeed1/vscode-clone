import React, { ReactNode } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IResizablePanel {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel: boolean;
}

const ResizablePanel = ({ defaultLayout = [30, 70], leftPanel, rightPanel, showLeftPanel }: IResizablePanel) => {
    const handleLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }
    return (
        <PanelGroup direction="horizontal" onLayout={handleLayout} autoSaveId="condition">
            {showLeftPanel && (
                <>
                    <Panel defaultSize={defaultLayout[0]} collapsible>
                        {leftPanel}
                    </Panel>
                    <PanelResizeHandle className="border-r-2 border-gray-400 bg-gray-800" />
                </>
            )}
            <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
        </PanelGroup>
    )
}

export default ResizablePanel