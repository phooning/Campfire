import React, { ReactElement, useEffect, useRef } from "react";
import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const WINDOW_RATIO = WIDTH / HEIGHT;
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

function App(): ReactElement {
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, WINDOW_RATIO, NEAR, FAR);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);

    // Attach to tree
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff5733 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={domRef} />;
}

export default App;
