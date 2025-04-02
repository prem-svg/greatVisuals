import { EditorStore } from "@/store";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const UrlInput = () => {
  const state = EditorStore((state) => state?.state);
  const onChangeValue = EditorStore((state) => state?.onChange);
  return (
    <div className="flex gap-2 items-center border-b-1 p-4">
      <Input
        value={state?.common?.url}
        onChange={(val) => onChangeValue("common", "url", val.target.value)}
        placeholder="Url"
      />
      <Button>Upload</Button>
    </div>
  );
};
