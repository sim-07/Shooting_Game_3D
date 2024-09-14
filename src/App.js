import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import Floor from './components/elements/Floor';
import Walls from './components/elements/Walls';
import Menu from './components/Menu';

function App() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 10, 30); // Posiziona la camera sopra il pavimento
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Creare e configurare i controlli
    const controls = new PointerLockControls(camera, renderer.domElement);
    controlsRef.current = controls;

    const handleClick = () => {
      controls.lock();
    };

    const menuContainer = document.getElementById('menuContainer');
    if (menuContainer) {
      menuContainer.addEventListener('click', handleClick);
    }

    controls.addEventListener('lock', () => {
      if (menuContainer) {
        menuContainer.style.display = 'none';
      }
    });
    controls.addEventListener('unlock', () => {
      if (menuContainer) {
        menuContainer.style.display = '';
      }
    });

    scene.add(controls.object);

    // Aggiungere una luce direzionale 
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(50, 50, 50);
    scene.add(light);

    // Aggiungi Floor e Walls alla scena 
    const floor = new Floor();
    scene.add(floor);

    
    const walls = new Walls();
    scene.add(walls);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (menuContainer) {
        menuContainer.removeEventListener('click', handleClick);
      }
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="canvasContainer" ref={mountRef} />
      <Menu />
    </>
  );
}


export default App;
