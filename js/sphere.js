// Obtener el canvas y crear el renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });

// Crear la cámara
const fov = 75;
const aspect = 2;  // el aspect ratio del canvas
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 0.1);

// Crear la escena
const scene = new THREE.Scene();


// Crear la geometría de la esfera
const geometry = new THREE.SphereGeometry(500, 60, 40);

// Cargar la textura de la imagen 360
const texture = new THREE.TextureLoader().load('/img/fantasy_landscape_medieval_magical_city_fantastic_.jpeg');
texture.mapping = THREE.UVMapping;
texture.minFilter = THREE.LinearFilter;

// Crear el material de la esfera
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide
});

// Crear la esfera
const sphere = new THREE.Mesh(geometry, material);
sphere.rotation.y = Math.PI;
scene.add(sphere);

// Agregar los controles del mouse para navegar la imagen
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Renderizar la escena
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();