import Globals from '../../../styles/globals';
import { useColorType } from './useColorType';

export default function useColor(color: string){
    const baseColor: useColorType = {
        // 키 컬러
        "low" : Globals.palette.$color_low,
        "base" : Globals.palette.$color_base,
        "high" : Globals.palette.$color_high,
        "pink" : Globals.palette.$color_pink,
        "green" : Globals.palette.$color_green,

        // 무채색
        "gray" : Globals.palette.$color_gray,
        "black" : Globals.palette.$color_black,

        // 원색
        "og_white" : Globals.palette.$color_og_white,
        "og_black" : Globals.palette.$color_og_black,
    };

    // const setColor = Object.keys(color) as (keyof useColorType)[];
    let setColor;
    let i: keyof useColorType;
    for (i in baseColor) {
        if (color == i){
            setColor = baseColor[i];
        }
    }

    return setColor;
};