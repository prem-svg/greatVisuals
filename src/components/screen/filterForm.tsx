import { EditorStore } from "@/store";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { InfoText } from "./infotext";

export const FilterForm = () => {
  const state = EditorStore((state) => state?.state);
  const onChange = EditorStore((state) => state?.onChange);

  return (
    <div className="p-4">
      <p className="mb-4 font-semibold text-source text-[16px]">Filters</p>
      <div className="pb-4">
        <div>
          <Switch
            label="Sharpen"
            checked={state?.filter?.sharpen ?? undefined}
            onCheckedChange={(val) => onChange("filter", "sharpen", val)}
          />
          <InfoText text="It increases contrast around edges." />
        </div>
        <div className="mt-4">
          <Switch label="Auto Improve" 
           checked={state?.filter?.auto_improve ?? undefined}
           onCheckedChange={(val) => onChange("filter", "auto_improve", val)}
          />
          <InfoText text="Automatically adjusts colors, contrast and brightness." />
        </div>
        <div className="mt-4 border-b-1 pb-4">
          <Switch
            label="Gray Scale"
            checked={state?.filter?.grayscale ?? undefined}
            onCheckedChange={(val) => onChange("filter", "grayscale", val)}
          />
          <InfoText text=" converts a colored image into a black-and-white (grayscale) image." />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <Slider
              label="Brightness"
              value={state?.filter?.brightness ?? undefined}
              onValueChange={(val) => onChange("filter", "brightness", val)}
            />
            <InfoText
              hideInfo={true}
              text="Make images brighter/darker or increase contrast."
            />
          </div>
          <div>
            <Slider
              label="Blur"
              value={state?.filter?.blur ?? undefined}
              onValueChange={(val) => onChange("filter", "blur", val)}
            />

            <InfoText
              hideInfo={true}
              text="Blur can be fine-tuned to different levels."
            />
          </div>
          <div>
            <Slider
              label="Hue"
              value={state?.filter?.hue ?? undefined}
              onValueChange={(val) => onChange("filter", "hue", val)}
            />
            <InfoText
              hideInfo={true}
              text="It determines the type of color (red, blue, green, etc.) without changing its brightness or saturation."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
