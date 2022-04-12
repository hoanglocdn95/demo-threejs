// initialization scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   requestAnimationFrame(animate);
// }
// animate();

const rendererWebGL = new THREE.WebGLRenderer();
rendererWebGL.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendererWebGL.domElement);

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);
rendererWebGL.render(scene, camera);
