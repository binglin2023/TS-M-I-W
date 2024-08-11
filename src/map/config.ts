export interface MapConfig {
    animate: boolean;
    zoom: number;
    center: number[];
    baseUrl: string;
    mode: string;
    mapDiv: string;
    token: string;
    mousemoveCallback: Function;
    popupCallback: Function;
}

