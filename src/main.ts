/**
 * Authour : Phang Jia Rong 2001145
 */

import {Engine } from "babylonjs";
import {App} from './app'

//Getting HTMLCanvasElement
const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

//Dictionary
const dictionary: {[dataType:string]: {[key:string]: any}} = {};

//Initializing Babylonjs and Scripts
const engine = new Engine(canvas, true);
const app = new App(engine);

const scenePromise = app.createXRScene(canvas, dictionary); //Creates the Scene

//Render Loop
scenePromise.then(scene => {
    engine.runRenderLoop(() => {
        scene.render();
    }
    )
})