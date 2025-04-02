/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StateCreator } from "zustand";
import { EditorFormState } from "./types";


// organization create slice
export const editorStateSlice: StateCreator<EditorFormState> = (set, get) => ({
    state: {
        common:{
            url:undefined
        },
        resize: {
            aspect: undefined,
            width: undefined,
            height: undefined,
            quality: undefined,
            radius: undefined,
            crop_from: undefined,
            rotate: undefined,
            flip: undefined,
            fit: undefined
        },
        filter: {
            sharpen: false,
            auto_improve: false,
            grayscale: false,
            brightness: null,
            blur: null,
            hue: null
        },
        genAi: {
            dectect: false,
            cropO: undefined,
            recolorO: undefined,
            color: "#000",
            removeO: undefined,
            replaceFO: undefined,
            replaceRO: undefined,
            allColors:[ "#000","#c1c1c1",],
            selectedAi: {
                value: 1,
                label: "Crop",
                placeholder: "Enter Object Name eg:dog",
                des: "Specify the objects you want to crop by using short prompts like: coffee table, sweater, etc.",
            }
        },
        tag: {
            auto_tag: false,
            tags: []
        }
    },
    // keys update functions 
    onChange: (parentKey: string, key: string, value: any) => {
        const { state } = get();
        // update setState method
        const updatedState = {
            ...state,
            [parentKey]: {
                ...state[parentKey],
                [key]: value
            }
        };
        set({
            state: updatedState
        });

    }
});