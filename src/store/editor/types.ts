/* eslint-disable @typescript-eslint/no-explicit-any */
interface ResizeOptions {
    aspect?: string;
    width?: number;
    height?: number;
    quality?: number;
    radius?: number;
    crop_from?: string;
    trim?:boolean;
    rotate?:string;
    flip?:string;
    fit?:string;
}

interface FilterOptions {
    sharpen: boolean;
    auto_improve: boolean;
    grayscale: boolean;
    brightness: number | null;
    blur: number | null;
    hue: number | null;
}

interface GenAiOptions {
    dectect: boolean;
    cropO?: string;
    recolorO?: string;
    color: string;
    removeO?: string;
    replaceFO?: string;
    replaceRO?: string;
    selectedAi:any;
    allColors?:string[]
}

interface TagOptions {
    auto_tag: boolean;
    tags: string[];
}

interface ImageProcessingState {
    common:{
        url?:string;
    },
    resize: ResizeOptions;
    filter: FilterOptions;
    genAi: GenAiOptions;
    tag: TagOptions;
}


export interface EditorFromSliceTypes {
    state: ImageProcessingState;
    onChange:(parentKey:string, key: string, value: any)=>void;
}




export type EditorFormState = EditorFromSliceTypes