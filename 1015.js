const p1_x = -2.5;
const p1_y = 0.4;
const p2_x = 12.1;
const p2_y = 7.3;

const distance_X_part = p2_x - p1_x;
const distance_Y_part = p2_y - p1_y;

const distance = Math.sqrt(Math.pow(distance_X_part, 2) + Math.pow(distance_Y_part, 2));

console.log(distance.toFixed(4));
