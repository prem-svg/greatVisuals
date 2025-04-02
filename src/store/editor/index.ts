import { create } from "zustand";
import { editorStateSlice } from "./form";
import { EditorFormState } from "./types";

export const EditorStore = create<EditorFormState>((...state) => ({
    ...editorStateSlice(...state)
}));