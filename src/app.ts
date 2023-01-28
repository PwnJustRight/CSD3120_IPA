/**
 * Authour : Phang Jia Rong 2001145
 */

import { Engine, MeshBuilder, Scene } from "babylonjs";             //Import classes from babylonjs
import { AdvancedDynamicTexture, TextBlock} from 'babylonjs-gui';   //Import classes from babylonjs-gui

/**
 * App class that holds the framework of the app and functions to 
 * create the XRScene and its properties
 */
export class App {
    private engine: Engine;                     //Engine
    private canvas: HTMLCanvasElement;          //HTMLCanvas

    /**
     * Constructor for the App class
     * @param engine 
     */
    constructor(engine: Engine)
    {
        this.engine = engine;
        console.log("app is running");
    }

    /**
     * Renders the interactive AR/VR scene when user clicks the "XR Format" button in the XRAuthor interface.
     * @param canvasID is the string ID of the HTMLCanvasElement target to render the scene
     * @param authoringData is a dict of dicts that contains various information from
     *  other XRAuthor components, e.g., dicts of recordingData, editingData
     */
    async createXRScene(
        canvasID : HTMLCanvasElement
        ,authoringData: {[dataType:string]: {[key:string]: any}})
    {
        const scene = new Scene(this.engine);
        scene.createDefaultCameraOrLight();
        
        const sphere = MeshBuilder.CreateSphere('sphere', {diameter: 1.3}, scene);
        sphere.position.y = 1;
        sphere.position.z = 5;

        const helloPlane = MeshBuilder.CreatePlane('hello plane', { size:15});
        helloPlane.position.y = 0;
        helloPlane.position.z = 5;
        const helloTexture = AdvancedDynamicTexture.CreateForMesh(helloPlane);

        const helloText = new TextBlock('hello');
        helloText.text = 'Hello XR';
        helloText.color = 'purple';
        helloText.fontSize = 50;
        helloTexture.addControl(helloText);

        const xr = await scene.createDefaultXRExperienceAsync({
            uiOptions: {
                sessionMode: 'immersive-vr'
            }
        });
        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "a":
                        case "A":
                            sphere.position.x -= 0.1;
                        break
                        case "d":
                        case "D":
                            sphere.position.x += 0.1;
                        break
                        case "w":
                        case "W":
                            sphere.position.y += 0.1;
                        break
                        case "s":
                        case "S":
                            sphere.position.y -= 0.1;
                        break
                        case "`":
                            scene.debugLayer.show();
                        break
                    }
                break;
            }
        });

        //only for debugging
        (window as any).xr = xr;

        return scene;
    }
}