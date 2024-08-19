/**
* 将返回的数据转为GeoJSON格式的数据合集
* @param {Array} res
* @returns
*/
export function backgroundToSource(res, key?) {
    console.log(res, 'res的值');
    
    const featrueArray = [];
    
    res.forEach((geo) => {
      let geometry = null;
      console.log(key, 'key的值为');
      if (geo.lng) {
        geometry = {
          type: 'Point',
          coordinates: [geo.lng, geo.lat],
        };
      } else {
        geometry = JSON.parse(geo[key]);
      }
    
      if (geometry) {
        const feature = {
          type: 'Feature',
          geometry,
          properties: { ...geo, geometry: geometry },
        };
        featrueArray.push(feature);
      }
    });
    
    const FeatureCollection = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: featrueArray,
      },
    };
    
    return FeatureCollection;
    }

/**
*  修改source的数据
* @param {mapbox-map} map
* @param {String} sourceid
* @param {Array} res
*/
export function setData(map, sourceid, res, key = 'stAsgeojson') {
    if (Array.isArray(res)) {
      map.getSource(sourceid)?.setData(backgroundToSource(res, key).data);
    } else {
      map.getSource(sourceid)?.setData(res);
    }
    }
    // 删除source
    export function removeSource(map: any, sourceId: string) {
        if (!sourceId)
            return;
        let datasource = map.getSource(sourceId);
        if (datasource) {
            map.removeSource(sourceId);
        }
    }
    // 新增layer
    export function addLayer(map: any, layer: any, beforeId: string | null = null) {
        if (map.getLayer(layer.id))
            return;
        if (beforeId === null)
            map.addLayer(layer);
        else
            map.addLayer(layer, beforeId);
    }
    // 删除layer
    export function removeLayer(map: any, layerId: string) {
        if (!layerId)
            return;
        let layer = map.getLayer(layerId);
        if (layer) {
            map.removeLayer(layerId);
        }
    }
    // 新增图标
    export function addImage(map: any, imageId: string, image: any, options) {
        removeImage(map, imageId);
        map.addImage(imageId, image, options);
    }
    // 删除图标
    export function removeImage(map: any, imageId: string) {
        if (!imageId)
            return;
        if (map.hasImage(imageId)) {
            map.removeImage(imageId);
        }
    }
    
    interface Geometry {
        type: string,
        coordinates: number[] | number[][] | number[][][] | number[][][][]
    }
    export function bbox(geom: Geometry): number[] {
        let _bbox: number[];
        let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
        if (geom.type === "Point") {
            const coors: number[] = <number[]>geom.coordinates;
            _bbox = [coors[0], coors[1], coors[0], coors[1]];
        }
        else if (geom.type === "MultiPoint" || geom.type === "LineString") {
            const coors: number[][] = <number[][]>geom.coordinates;
            for (let coor of coors) {
                if (minx > coor[0])
                    minx = coor[0];
                if (miny > coor[1])
                    miny = coor[1];
                if (maxx < coor[0])
                    maxx = coor[0];
                if (maxy < coor[1])
                    maxy = coor[1];
            }
            _bbox = [minx, miny, maxx, maxy];
        }
        else if (geom.type === "MultiLineString" || geom.type === "Polygon") {
            const coors: number[][][] = <number[][][]>geom.coordinates;
            for (let element of coors) {
                for (let coor of element) {
                    if (minx > coor[0])
                        minx = coor[0];
                    if (miny > coor[1])
                        miny = coor[1];
                    if (maxx < coor[0])
                        maxx = coor[0];
                    if (maxy < coor[1])
                        maxy = coor[1];
                }
            }
            _bbox = [minx, miny, maxx, maxy];
        }
        else if (geom.type === "MultiPolygon") {
            const coors: number[][][][] = <number[][][][]>geom.coordinates;
            for (let element of coors) {
                for (let ring of element) {
                    for (let coor of ring) {
                        if (minx > coor[0])
                            minx = coor[0];
                        if (miny > coor[1])
                            miny = coor[1];
                        if (maxx < coor[0])
                            maxx = coor[0];
                        if (maxy < coor[1])
                            maxy = coor[1];
                    }
                }
            }
            _bbox = [minx, miny, maxx, maxy];
        }
        return _bbox;
    }
    
    // 获取ds的bbox
    export function datasetBbox(dataset: any): number[] {
        let bbox0 = [Infinity, Infinity, -Infinity, -Infinity];
        for (let feature of dataset.features) {
            const geom = <Geometry>feature.geometry;
            const _bbox: number[] = bbox(geom);
            if (bbox0[0] > _bbox[0])
                bbox0[0] = _bbox[0];
            if (bbox0[1] > _bbox[1])
                bbox0[1] = _bbox[1];
            if (bbox0[2] < _bbox[2])
                bbox0[2] = _bbox[2];
            if (bbox0[3] < _bbox[3])
                bbox0[3] = _bbox[3];
        }
        return bbox0;
    }
    