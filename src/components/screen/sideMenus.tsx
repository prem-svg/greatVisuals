import { ChartAreaIcon, CropIcon, Sparkle, Tag, WandSparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const MenusItems = [
  {
    label: "Resize & Crop",
    icon: <CropIcon size={20} />,
    value:1
  },
  {
    label: "Filters",
    icon: <WandSparklesIcon size={20}/>,
    value:2
  },
  {
    label: "GenAI",
    icon: <Sparkle size={20}/>,
    value:3
  },
  {
    label: "Meta & Tags",
    icon: <Tag size={20}/>,
    value:4
  },
  {
    label: "Stats",
    icon: <ChartAreaIcon size={20}/>,
    value:5
  },
];

interface SideMenuProps{
  value:number;
  onChange:(value:number)=>void;
}

export const SideMenus = ({value,onChange}:SideMenuProps) => {
  return (
    <div className="!w-[100px] p-2 bg-gray-100 cursor-pointer">
      <div className="flex flex-col">
      {MenusItems?.map((val) => {
        return (
          <div key={val?.label} className={cn(
            "mt-4 px-2 py-4 rounded-lg text-wrap",
            val?.value ===value && "bg-white"
          )} onClick={()=>onChange(val?.value)}>
            <center>
            {val?.icon}
                <p className="text-[12px] mt-2 text-gray-800 text-center text-wrap">
                  {val?.label}
                </p>
            </center>
          </div>
        );
      })}
      </div>
    </div>
  );
};
