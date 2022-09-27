
interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calculateLengthL1(v: Vector3D) {
  let length = 0 ;

  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += Math.abs(coord);
  }

  return length;
}

const vec3D = { x: 3, y: 4, z: 1, addr: "dd" };
calculateLengthL1(vec3D);

export {};
