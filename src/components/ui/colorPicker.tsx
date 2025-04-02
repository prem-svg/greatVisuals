"use client";

import * as React from "react";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  selectedColors: string[];
  onColorSelect: (colors: string[]) => void;
}

export function ColorPicker({ selectedColors, onColorSelect }: ColorPickerProps) {
  const [color, setColor] = React.useState("#000000");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const handleColorAdd = () => {
    if (!selectedColors.includes(color)) {
      onColorSelect([...selectedColors, color]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "h-8 w-8 rounded-full border flex items-center justify-center hover:scale-105 transition-transform",
            "bg-background"
          )}
        >
          <Plus className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="space-y-4">
          <HexColorPicker color={color} onChange={handleColorChange} />
          <button
            className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
            onClick={handleColorAdd}
          >
            Add Color
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}