import { MoveDown, MoveUp } from "lucide-react";

export const StatsComponent = () => {
  return (
    <div className="px-6 mt-4">
      <p className="text-[16px] font-semibold">Comparison & stats</p>
      <div className="grid grid-cols-12 mt-4 gap-4">
        <div className="grid col-span-6">
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1247667822/photo/traffic-jam-with-cars-mopeds-and-auto-rickshaws-in-a-road-in-new-delhi-in-india.jpg?s=612x612&w=0&k=20&c=l73s2l1WyBVp71x9iveOffwt5-U7rox6mamt1tdh6-U="
          />
          <div className="mt-2">
          <p className="font-semibold text-center">12 MB</p>
          <div className="flex gap-2 mt-2 justify-center items-center">
            <MoveUp size={16}/>
            <p>12 Sec</p>
          </div>
          </div>
        </div>
        <div className="grid col-span-6">
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1247667822/photo/traffic-jam-with-cars-mopeds-and-auto-rickshaws-in-a-road-in-new-delhi-in-india.jpg?s=612x612&w=0&k=20&c=l73s2l1WyBVp71x9iveOffwt5-U7rox6mamt1tdh6-U="
          />
         <div className="mt-2">
          <p className="font-semibold text-center">1 MB</p>
          <div className="flex gap-2 mt-2 justify-center items-center">
            <MoveDown size={16}/>
            <p>12 Sec</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
