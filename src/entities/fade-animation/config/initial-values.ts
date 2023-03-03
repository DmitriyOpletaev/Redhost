import {AnimationInitialConfig} from "../lib/types";
import {Easing} from "react-native-reanimated";

export const animationInitialConfig:AnimationInitialConfig ={
    duration:230,
    delayMS:0,
    easing:Easing.ease,
    mode:'entering-exiting',
    animationOnFirstRender:false,
    translateIn:[0,0],
    translateOut:[0,0]
}
