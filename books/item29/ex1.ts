/* eslint-disable @typescript-eslint/no-unused-vars */

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;

type LngLat = {
  lng: number;
  lat: number;
};
type LngLatLike =
  LngLat |
  { lon: number; lat: number; } |
  [number, number];
type Camera = {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
};
type CameraOptions = Omit<Partial<Camera>, 'center'> & { center?: LngLatLike };

type LngLatBounds =
  { northeast: LngLatLike; southwest: LngLatLike; } | // 3 x 3
  [LngLatLike, LngLatLike] | // 3 x 3
  [number, number, number, number]; // 1

let camera = viewportForBounds([100, 100, 100, 100]);
camera = viewportForBounds([[100, 100], [200, 200]]);

const {center: {lat, lng}, zoom} = camera;
zoom;

setCamera(camera);

export {};
