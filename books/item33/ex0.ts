/* eslint-disable @typescript-eslint/no-unused-vars */

type FillLayout = 1;
type LineLayout = 2;
type PointLayout = 3;
type FillPaint = 11;
type LinePaint = 12;
type PointPaint = 13;

interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

export {};
