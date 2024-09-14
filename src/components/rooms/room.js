import { Wall } from '../elements/wall.js';

export class Room {
    constructor(scene) {
        this.scene = scene;

        // Crea e aggiungi pavimento
        const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
        const floorGeometry = new THREE.PlaneGeometry(100, 100);
        this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
        this.floor.rotation.x = -Math.PI / 2;  // Pavimento piatto
        scene.add(this.floor);

        // Crea e aggiungi soffitto
        const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x999999 });
        const ceilingGeometry = new THREE.PlaneGeometry(100, 100);
        this.ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
        this.ceiling.position.y = 10;  // Posiziona il soffitto più in alto
        this.ceiling.rotation.x = Math.PI / 2;
        scene.add(this.ceiling);

        // Aggiungi le pareti (posizione e rotazione personalizzabili)
        this.walls = [];
        this.walls.push(new Wall(100, 10, 0xaaaaaa, { x: 0, y: 5, z: -50 }, { x: 0, y: 0, z: 0 }));  // Parete posteriore
        this.walls.push(new Wall(100, 10, 0xaaaaaa, { x: 0, y: 5, z: 50 }, { x: 0, y: 0, z: 0 }));   // Parete frontale
        this.walls.push(new Wall(100, 10, 0xaaaaaa, { x: 50, y: 5, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 }));  // Parete destra
        this.walls.push(new Wall(100, 10, 0xaaaaaa, { x: -50, y: 5, z: 0 }, { x: 0, y: Math.PI / 2, z: 0 }));  // Parete sinistra

        // Aggiungi le pareti alla scena
        this.walls.forEach(wall => wall.addToScene(scene));
    }
}
