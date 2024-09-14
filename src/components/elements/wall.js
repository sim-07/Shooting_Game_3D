export class Wall {
    constructor(width, height, color, position, rotation) {
        const wallMaterial = new THREE.MeshBasicMaterial({ color });
        const wallGeometry = new THREE.PlaneGeometry(width, height);
        this.mesh = new THREE.Mesh(wallGeometry, wallMaterial);

        // Posizionamento e rotazione della parete
        this.mesh.position.set(position.x, position.y, position.z);
        this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
