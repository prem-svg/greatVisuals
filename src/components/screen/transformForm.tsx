import { Input } from "../ui/input";
import {
  FlipHorizontal,
  FlipVerticalIcon,
  RotateCcwIcon,
  RotateCwIcon,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SelectBox } from "./selectBox";
import { Switch } from "../ui/switch";
import { EditorStore } from "@/store";
import React from "react";

export const TransformForm = () => {
  const state = EditorStore((state) => state?.state);
  const onChange = EditorStore((state) => state?.onChange);
  const [rotate, setRotate] = React.useState<string>("1");

  return (
    <div className="p-4">
      <p className="mb-4 font-semibold text-source text-[16px]">
        Resize & Crop
      </p>
      <div className="grid grid-cols-12 gap-3 pb-4 border-b-1">
        <div className="col-span-12">
          <SelectBox
            value={state?.resize?.aspect ?? undefined}
            onChange={(val) => onChange("resize", "aspect", val)}
            placeholder="Aspect"
            options={[
              {
                label: "Custom",
                value: "Custom",
              },
              {
                label: "Portrait (9:16)",
                value: "Portrait (9:16)",
              },
              {
                label: "Portrait (3:4)",
                value: "Portrait (3:4)",
              },
              {
                label: "Squre (1:1)",
                value: "Squre (1:1)",
              },
              {
                label: "Wide (16:9)",
                value: "Wide (16:9)",
              },
              {
                label: "Landscap (4:3)",
                value: "Landscap (4:3)",
              },
            ]}
          />
        </div>
        <div className="col-span-6">
          <Input
            placeholder="Width in px"
            type="number"
            value={state?.resize?.width ?? undefined}
            onChange={(val) => onChange("resize", "width", val.target.value)}
          />
        </div>
        <div className="col-span-6">
          <Input
            placeholder="Height in px"
            type="number"
            value={state?.resize?.height ?? undefined}
            onChange={(val) => onChange("resize", "height", val.target.value)}
          />
        </div>
        <div className="col-span-6">
          <Input
            placeholder="Quality in %"
            type="number"
            value={state?.resize?.quality ?? undefined}
            onChange={(val) => onChange("resize", "quality", val.target.value)}
          />
        </div>
        <div className="col-span-6">
          <Input
            placeholder="Radius in px"
            type="number"
            value={state?.resize?.radius ?? undefined}
            onChange={(val) => onChange("resize", "radius", val.target.value)}
          />
        </div>
        <div className="col-span-12">
          <SelectBox
            placeholder="Crop From"
            value={state?.resize?.crop_from ?? undefined}
            onChange={(val) => onChange("resize", "crop_from", val)}
            options={[
              {
                label: "None",
                value: "None",
              },
              {
                label: "Top",
                value: "Top",
              },
              {
                label: "Bottom",
                value: "Bottom",
              },
              {
                label: "Right",
                value: "Right",
              },
              {
                label: "Left",
                value: "Left",
              },
            ]}
          />
        </div>
        <div className="mt-2 col-span-12">
          <Switch
            label="Trim"
            checked={state?.resize?.trim ?? undefined}
            onCheckedChange={(val) => onChange("resize", "trim", val)}
          />
          <p className="text-[10px] text-gray-800 mt-2">
            Sharp automatically removes unwanted borders from an image based on
            the color of the top-left pixel.
          </p>
        </div>
      </div>
      <p className="mt-4 mb-2 font-semibold text-[12px]">Rotate / Flip</p>
      <div className="pb-4 border-b-1 flex gap-4">
        <ToggleGroup
          type="single"
          variant={"outline"}
          value={rotate}
          onValueChange={(val) => {
            const updatedDegree: number =
              val === "1"
                ? Number(state?.resize?.rotate ?? 0) + 90
                : Number(state?.resize?.rotate ?? 0) - 90;
            onChange("resize", "rotate", updatedDegree);
            setRotate(val);
          }}
        >
          <ToggleGroupItem value={"1"}>
            <RotateCcwIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value={"2"}>
            <RotateCwIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          variant={"outline"}
          type="single"
          value={state?.resize?.flip ?? undefined}
          onValueChange={(val) => onChange("resize", "flip", val)}
        >
          <ToggleGroupItem value="flip">
            <FlipHorizontal />
          </ToggleGroupItem>
          <ToggleGroupItem value="flop">
            <FlipVerticalIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <p className="mt-4 mb-1 font-semibold text-[12px]">Fit</p>
      <div className="pb-4">
        <ToggleGroup
          variant={"outline"}
          type="single"
          value={state?.resize?.fit ?? undefined}
          onValueChange={(val) => onChange("resize", "fit", val)}
        >
          <ToggleGroupItem value="cover">
            <p className="font-regular text-[12px] px-2">Cover</p>
          </ToggleGroupItem>
          <ToggleGroupItem value="fir">
            <p className="font-regular text-[12px] px-2">Fit</p>
          </ToggleGroupItem>
          <ToggleGroupItem value="contain">
            <p className="font-regular text-[12px] px-2">Contain</p>
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-[10px] text-gray-800 mt-2">
          Resizes the image to fit inside the bounding box specified by the
          dimensions, maintaining the aspect ratio.
        </p>
      </div>
    </div>
  );
};
