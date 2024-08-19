import { MapConfig } from './config';
import { center } from '@turf/turf';
import { getBaseMapStyle } from './style';
import { bbox } from './utils';

let map:any,
    target:any,
    infoPopup:any = null,
    currentZoom:any = null;

export async function mapInit(config:MapConfig){
    mapboxgl.accessToken = config.token;
    let start:any
    if (config.mode === "production" && config.animate === true) {
        start = {
          center: [0, 0],
          zoom: 1
        };
      } else {
        start = {
          center: config.center,
          zoom: config.zoom
        };
      }
    target = {
    center: config.center,
    zoom: config.zoom
    };
    currentZoom = config.zoom;
    return new Promise((_res: any, _rej: any) => {
        map = new mapboxgl.Map({
          container: config.mapDiv,
          style: getBaseMapStyle(),
          ...start,
          attributionControl: false,
          antialias: true,
          useWebGL2: true
        });
        map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "bottom-right");
        // 添加scale控件
        const scale = new mapboxgl.ScaleControl({
          maxWidth: 100,
          unit: "metric"
        });
        map.addControl(scale, "bottom-right");

    });
}


export function showPopupInfo(content: string, center: string | number[], extent?: string) {
    let popupCoor;
    if (typeof center === "string") {
      const pt = JSON.parse(center);
      popupCoor = pt.coordinates;
    } else popupCoor = center;
  
    if (infoPopup === null) {
      infoPopup = new mapboxgl.Popup({
        maxWidth: "none"
      });
    }
    infoPopup.setLngLat(popupCoor).setHTML(content).addTo(map);
    if (extent === undefined) {
      map.flyTo({
        center: popupCoor,
        zoom: currentZoom + 3,
        maxDuration: 100
      }); // 点居中
    } else {
      const geom = JSON.parse(extent);
      const _bbox = bbox(geom);
      map.fitBounds(_bbox); // 线面居中
    }
  }