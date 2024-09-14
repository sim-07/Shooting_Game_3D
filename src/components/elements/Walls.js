import * as THREE from 'three';

function Walls() {
  const walls = new THREE.Group();

  const geometry = new THREE.BoxGeometry(1, 10, 50);
  const material = new THREE.MeshBasicMaterial({ color: 0x44a7ff });

  const wall1 = new THREE.Mesh(geometry, material);
  wall1.position.set(0, 5, -25);

  const wall2 = new THREE.Mesh(geometry, material);
  wall2.position.set(0, 5, 25);

  walls.add(wall1);
  walls.add(wall2);

  return walls;
}

export default Walls;
