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

// 加载json
export function getJson(jsonUrl: string) {
    return new Promise((res, rej) => {
        fetch(jsonUrl).then(_res => {
            return _res.json();
        }).then((data) => {
            res(data);
        });
    });
}
