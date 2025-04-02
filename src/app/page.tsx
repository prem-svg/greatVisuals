/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FilterForm } from "@/components/screen/filterForm";
import { GenAIForm } from "@/components/screen/genAiForm";
import { MetaTagForm } from "@/components/screen/metaTagForm";
import { SideMenus } from "@/components/screen/sideMenus";
import { StatsComponent } from "@/components/screen/statsComp";
import { TransformForm } from "@/components/screen/transformForm";
import { UrlInput } from "@/components/screen/urlInput";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  const components: any = {
    1: <TransformForm />,
    2: <FilterForm />,
    3: <GenAIForm />,
    4: <MetaTagForm />,
  };

  const Editor = () => {
    return (
      <>
        {/* First Column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 border-r-1">
          <div className="flex">
            <SideMenus value={selectedMenu} onChange={setSelectedMenu} />
            <div className="h-[calc(100vh-6px)] overflow-y-scroll w-full">
              {components[selectedMenu]}
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <UrlInput />
          <div className="p-2 bg-gray-50 h-[calc(100vh-70px)]">
            <div>
              <center>
                <ToggleGroup
                  className="bg-white mb-4 cursor-pointer"
                  type="single"
                  variant={"outline"}
                >
                  <ToggleGroupItem value={"1"} className="px-4">
                    Edited
                  </ToggleGroupItem>
                  <ToggleGroupItem value={"2"} className="px-4">
                    Original
                  </ToggleGroupItem>
                </ToggleGroup>
                <img
                  alt="image"
                  src="https://media.istockphoto.com/id/1247667822/photo/traffic-jam-with-cars-mopeds-and-auto-rickshaws-in-a-road-in-new-delhi-in-india.jpg?s=612x612&w=0&k=20&c=l73s2l1WyBVp71x9iveOffwt5-U7rox6mamt1tdh6-U="
                />
              </center>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Stats = () => {
    return (
      <div className="grid col-span-12">
        <div className="flex">
          <SideMenus value={selectedMenu} onChange={setSelectedMenu} />
          <div className="h-[calc(100vh-6px)] overflow-y-scroll w-full">
            <UrlInput />
            <StatsComponent />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-lg mx-auto">
      <div className="grid grid-cols-12">
        {selectedMenu === 5 ? <Stats /> : <Editor />}
      </div>
    </div>
  );
}
