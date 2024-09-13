// Configurazione base della scena, della camera e del renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Aggiungi una luce ambientale
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luce ambientale tenue
scene.add(ambientLight);

// Aggiungi una luce direzionale (simula il sole)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5); // Posizioniamo la luce dall'alto
scene.add(directionalLight);

// Creiamo il terreno (una semplice geometria piana)
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x008800 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // Ruota il piano orizzontalmente
scene.add(plane);

// Creiamo una sfera per rappresentare il giocatore (un oggetto semplice)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 1; // Posizioniamo la sfera leggermente sopra il terreno
scene.add(sphere);

// Posizioniamo la camera e puntiamola verso il giocatore
camera.position.set(0, 5, 10);
camera.lookAt(sphere.position);

// Funzione di animazione (loop di rendering)
function animate() {
    requestAnimationFrame(animate);

    // Ruotiamo leggermente la sfera per animazione
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Aggiungi un listener per ridimensionare il canvas con la finestra
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
