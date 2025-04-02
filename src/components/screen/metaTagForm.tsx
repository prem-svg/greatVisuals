import React from "react";
import { ReactSelect } from "../ui/reactSelect";
import { Switch } from "../ui/switch";
import { InfoText } from "./infotext";
import { EditorStore } from "@/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Info } from "lucide-react";

export const MetaTagForm = () => {
  const state = EditorStore((state) => state?.state);
  const onChangeValue = EditorStore((state) => state?.onChange);

  const fileInfo=[
    {
      label:"Dimensions",
      value:"1024 x 447"
    },
    {
      label:"Size",
      value:"218.0 KB"
    },
    {
      label:"Format",
      value:"JPG"
    },
    {
      label:"Created",
      value:"March 31st 2025"
    },
    {
      label:"Creator",
      value:"PREM M"
    },
    {
      label:"Private file",
      value:"No"
    }
  ]

  return (
    <div className="p-4">
      <p className="mb-4 font-semibold text-source text-[16px]">Meta & Tags</p>
      <div className="pb-4">
        <div>
          <Switch
            label="Auto Tagging"
            checked={state?.tag?.auto_tag}
            onCheckedChange={(val) => onChangeValue("tag", "auto_tag", val)}
          />
          <InfoText text="Detect the tags from image" />
        </div>
      </div>
      <div className="pb-4">
        <ReactSelect
          value={state?.tag?.tags}
          onChange={(val) => onChangeValue("tag", "tags", val)}
        />
      </div>

      <div>
        <Accordion className="border-b-1" type="single" collapsible defaultChecked={true}>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-2 font-bold items-center">
                <Info size={16}/>
                <p className="text-[16px]">File Info</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
             <div className="flex flex-col gap-4">
              {
                fileInfo?.map((val)=>{
                  return(
                    <div className="flex gap-2" key={val?.label}>
                      <p className="font-semibold">{val?.label}:</p>
                      <p>{val?.value}</p>
                    </div>
                  )
                })
              }
             </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
