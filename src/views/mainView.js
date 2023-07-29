import * as THREE from 'three';
import { LoadGLTFByPath } from '../helpers/ModelHelper.js'
import { setupRenderer } from '../helpers/RendererHelper.js'
import { spinWheel } from '../helpers/WheelHelper.js'
import { getFirstObjectWithName } from '../helpers/RayCastHelper.js'
import { getFirstCameraInScene, updateCameraAspect } from '../helpers/CameraHelper.js'

const scenePath = './src/models/scene.gltf'

export async function setupScene(canvas) {

	const scene = new THREE.Scene();
	const renderer = setupRenderer();	
	let camera;
	let shouldSpin = false;
	let wheel;

	// Load the GLTF model
	await LoadGLTFByPath(scene, scenePath)
		.then(() => {
			camera = getFirstCameraInScene(scene);
			updateCameraAspect(camera);
		})
		.catch((error) => {
			console.error('Error loading JSON scene:', error);
	});

	scene.add(camera);

	document.addEventListener('click', onClick);

	function onClick(event) {

		wheel = getFirstObjectWithName(event, window, camera, scene, "Wheel");

		(wheel != null) ? (shouldSpin = !shouldSpin) : null;
	}

	function animate() {
		requestAnimationFrame(animate);

		spinWheel(wheel, shouldSpin)

		renderer.render(scene, camera);
	}
	animate();
};
