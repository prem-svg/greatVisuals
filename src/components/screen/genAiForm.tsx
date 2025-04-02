import React from "react";
import { Switch } from "../ui/switch";
import { GenAiTypes } from "./genAItypes";
import { InfoText } from "./infotext";
import { EditorStore } from "@/store";

export const GenAIForm = () => {
  const state = EditorStore((state) => state?.state);
  const onChange = EditorStore((state) => state?.onChange);

  return (
    <div className="p-4">
      <p className="mb-4 font-semibold text-source text-[16px]">
        Generative AI
      </p>
      <div className="pb-4">
        <div>
          <Switch
            checked={state?.genAi?.dectect}
            onCheckedChange={(val) => onChange("genAi", "dectect", val)}
            label="Detect Objects"
          />
          <InfoText text="Detect the all the objects on image" />
        </div>
      </div>
      <GenAiTypes
        value={state?.genAi?.selectedAi}
        onChange={(val) => onChange("genAi", "selectedAi", val)}
      />
    </div>
  );
};
