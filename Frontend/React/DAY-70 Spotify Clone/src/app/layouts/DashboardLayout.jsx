import React from "react";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import { Outlet } from "react-router";
import { Panel, Group } from "react-resizable-panels";
import Player from "../../features/player/ui/components/Player";
import RightPanel from "../../features/dashboard/ui/pages/RightPanel";
import LeftPanel from "../../features/dashboard/ui/pages/LeftPanel";

const DashboardLayout = () => {
  return (
    <div className="h-[90%] bg-black overflow-hidden">
      <style>{`* { scrollbar-width: none; } *::-webkit-scrollbar { display: none; }`}</style>
      <Navbar />
      <div className="h-[90%] mt-2">
        <Group className="gap-2 p-2 text-amber-50">
          <Panel
            className="bg-[#121212] rounded-md p-3"
            minSize={"10%"}
            maxSize={"25%"}
          >
            <LeftPanel/>
          </Panel>

          <Panel className="rounded-md bg-[#121212] p-3">
            <Outlet />
          </Panel>

          <Panel minSize={"10%"} maxSize={"18%"} className="bg-[#121212] p-3 rounded-md">
           <RightPanel/>
          </Panel>
        </Group>
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};

export default DashboardLayout;