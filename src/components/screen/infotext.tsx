
import { InfoIcon } from "lucide-react";

export const InfoText = ({
    text="",
    hideInfo=false
}) => {
  return (
    <div className="flex gap-2 w-full  mt-2">
      <div>
        {!hideInfo && 
        <InfoIcon size={14}/>
         }
        </div>
      <p className="text-[10px] text-gray-800">
        {text}
      </p>
    </div>
  );
};
