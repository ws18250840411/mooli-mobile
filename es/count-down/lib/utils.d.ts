export declare type TimeData = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
export declare function parseTimeData(time: number): TimeData;
export declare function parseFormat(format: string, timeData: TimeData): string;
export declare function isSameSecond(time1: number, time2: number): boolean;
export declare function padZero(num: number | string, targetLength?: number): string;
