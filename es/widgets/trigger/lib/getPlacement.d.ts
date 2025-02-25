export interface Feedback {
    at: ["left" | "right" | "center", "top" | "bottom" | "center"];
    my: ["left" | "right" | "center", "top" | "bottom" | "center"];
}
export declare type Placements = "left" | "top" | "right" | "bottom" | "topLeft" | "topRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "bottomRight" | "bottomLeft";
export default function getPlacement(placement: Placements, offset?: [number, number] | number): {
    at: string;
    my: string;
} | null;
