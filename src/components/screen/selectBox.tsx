/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectBoxProps {
  value?: string;
  options: any;
  placeholder: string;
  onChange?: (val: string) => void;
}

export const SelectBox = ({
  options,
  placeholder,
  onChange,
  value,
}: SelectBoxProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((val: any) => {
          return (
            <SelectItem key={val?.value} value={val?.value}>
              {val?.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
