/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import {
  BlendIcon,
  Check,
  CropIcon,
  EraserIcon,
  ReplaceIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { ColorPicker } from "../ui/colorPicker";
import React from "react";
import { EditorStore } from "@/store";

const types = [
  {
    value: 1,
    label: "Crop",
    icon: <CropIcon size={20} />,
    placeholder: "Enter Object Name eg: dog",
    des: "Specify the objects you want to crop by using short prompts like: coffee table, sweater, etc.",
  },
  {
    value: 2,
    label: "Recolor",
    icon: <BlendIcon size={20} />,
    placeholder: "Enter Object Name eg: Bag",
    des: "Specify the objects you want to recolor by using short prompts like: coffee table, sweater, etc.",
  },
  {
    value: 3,
    label: "Remove Object",
    icon: <EraserIcon size={20} />,
    placeholder: "Enter Object Name eg: Shoe",
    des: "Specify the objects you want to remove by using short prompts like: trash can, cigarettes, etc.",
  },
  {
    value: 4,
    label: "Replace",
    placeholder: "Enter Object Name eg: dog",
    icon: <ReplaceIcon size={20} />,
    des: "Specify the objects you want to swap using short prompts like: coffee table, sweater, etc.",
  },
];

interface GenAiTypesProps {
  value: any;
  onChange: (value: any) => void;
}

export const GenAiTypes = ({ value, onChange }: GenAiTypesProps) => {
  const state = EditorStore((state) => state?.state);
  const onChangeValue = EditorStore((state) => state?.onChange);


  return (
    <div className="border-1 rounded-lg overflow-hidden">
      <div className="flex justify-around bg-gray-100 border-b-1">
        {types?.map((val) => {
          return (
            <div
              key={val?.label}
              onClick={() => onChange(val)}
              className={cn(
                "flex-grow cursor-pointer p-4",
                value?.value === val?.value && "bg-white"
              )}
            >
              <center>{val?.icon}</center>
            </div>
          );
        })}
      </div>

      <div className="p-4">
        <p className="text-[14px]">{value?.label}</p>
        <p className="text-[12px] text-gray-500 mt-2">{value?.des}</p>

        <div className="mt-4">
          {value?.value === 1 && (
            <Input
              placeholder={value?.placeholder}
              value={state?.genAi?.cropO}
              onChange={(val) =>
                onChangeValue("genAi", "cropO", val.target.value)
              }
            />
          )}
          {value?.value === 2 && (
            <Input
              placeholder={value?.placeholder}
              value={state?.genAi?.recolorO}
              onChange={(val) =>
                onChangeValue("genAi", "recolorO", val.target.value)
              }
            />
          )}
          {value?.value === 3 && (
            <Input
              placeholder={value?.placeholder}
              value={state?.genAi?.removeO}
              onChange={(val) =>
                onChangeValue("genAi", "removeO", val.target.value)
              }
            />
          )}
          {value?.value === 4 && (
            <Input
              placeholder={value?.placeholder}
              value={state?.genAi?.replaceFO}
              onChange={(val) =>
                onChangeValue("genAi", "replaceFO", val.target.value)
              }
            />
          )}
        </div>
        {value?.value === 4 && (
          <div className="mt-4">
            <Input
              placeholder="Enter Replace Object eg: cat"
              value={state?.genAi?.replaceRO ?? undefined}
              onChange={(val) =>
                onChangeValue("genAi", "replaceRO", val.target.value)
              }
            />
          </div>
        )}
        {value?.value === 2 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {state?.genAi?.allColors?.map((color) => (
              <button
                key={color}
                className="h-8 w-8 rounded-full border hover:scale-105 transition-transform relative"
                style={{ backgroundColor: color }}
                onClick={() => onChangeValue("genAi", "color", color)}
              >
                {color === state?.genAi?.color && (
                  <Check
                    className={cn(
                      "h-4 w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      color === "#FFFFFF" ? "text-black" : "text-white"
                    )}
                  />
                )}
              </button>
            ))}
            <ColorPicker
              selectedColors={state?.genAi?.allColors ?? []}
              onColorSelect={(val) => onChangeValue("genAi", "allColors", val)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
