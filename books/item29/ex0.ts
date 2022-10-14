/* eslint-disable @typescript-eslint/no-unused-vars */

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

interface CameraOptions {
  center?: LngLat;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}

type LngLat =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];

type LngLatBounds =
  { northeast: LngLat; southwest: LngLat; } | // 3 x 3
  [LngLat, LngLat] | // 3 x 3
  [number, number, number, number]; // 1

let camera = viewportForBounds([100, 100, 100, 100]);
camera = viewportForBounds([[100, 100], [200, 200]]);

const {center: {lat, lng}, zoom} = camera;
zoom;

setCamera(camera);

export {};
