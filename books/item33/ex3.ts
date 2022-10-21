/* eslint-disable @typescript-eslint/no-unused-vars */

type FillLayout = 1;
type LineLayout = 2;
type PointLayout = 3;
type FillPaint = 11;
type LinePaint = 12;
type PointPaint = 13;

interface FillLayer {
  type: 'fill';
  layout: FillLayout;
  paint: FillPaint;
}

interface LineLayer {
  type: 'line';
  layout: LineLayout;
  paint: LinePaint;
}

interface PointLayer {
  type: 'point';
  layout: PointLayout;
  paint: PointPaint;
}

type Layer = FillLayer | LineLayer | PointLayer;

export {};
