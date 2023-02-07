/**
 * Author : Phang Jia Rong 2001145
 */

import { Animation } from "@babylonjs/core/Animations/animation";
import { Sound } from "@babylonjs/core/Audio/sound";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { VideoDome } from "@babylonjs/core/Helpers";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointLight } from "@babylonjs/core/Lights/pointLight";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { CubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Color3, Color4, Vector3 } from "@babylonjs/core/Maths/math";
import { AbstractMesh, MeshBuilder } from "@babylonjs/core/Meshes";
import { ParticleSystem } from "@babylonjs/core/Particles/particleSystem";
import { Scene } from "@babylonjs/core/scene";
import { AdvancedDynamicTexture, TextBlock } from "@babylonjs/gui";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

/**
 * App class that holds the framework of the app and functions to 
 * create the XRScene and its properties
 */
export class App {
    private engine: Engine;                     //Engine
    private canvas: HTMLCanvasElement;          //HTMLCanvas
    private sound : Sound;
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
        canvasID : string
        ,authoringData: {[dataType:string]: {[key:string]: any}})
    {
        const scene = new Scene(this.engine);
        //scene.createDefaultCameraOrLight();
        
        this.createSkybox(scene);
        this.createLights(scene);
        this.createCamera(scene);

        this.createVideoSkyDome(scene);

        this.addInspectorKeyboardShortcut(scene);

        this.loadModel(scene);

        //this.addSounds(scene);

        this.createText(scene);

        const sphere = MeshBuilder.CreateSphere('sphere', {diameter: 1.3}, scene);
        sphere.position.y = 1;
        sphere.position.z = 5;

       

        const xr = await scene.createDefaultXRExperienceAsync({
            uiOptions: {
                sessionMode: 'immersive-vr'
            }
        });
        
        //only for debugging
        (window as any).xr = xr;

        return scene;
    }

    createCamera(scene : Scene)
    {
        const camera = new FreeCamera('uniCamera', new Vector3(0, 0, -5), scene);
        camera.attachControl(this.canvas, true);
    }

    createLights(scene:Scene)
    {
        const hemiLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
        hemiLight.intensity = 0.3;
        hemiLight.diffuse = new Color3(1,1,1);

        const pointLight = new PointLight('pointLight', new Vector3(0, 1.5, 2),scene);
        pointLight.intensity = 1;
        pointLight.diffuse = new Color3(1,0,0);
    }

    createSkybox(scene: Scene)
    {
        const skybox = MeshBuilder.CreateBox('skybox', {size:1000}, scene);
        const skyBoxMaterial = new StandardMaterial('skybox-mat');
        
        skyBoxMaterial.backFaceCulling = false;

        skyBoxMaterial.reflectionTexture = new CubeTexture('assets/textures/skybox', scene);
        skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
        skyBoxMaterial.diffuseColor = new Color3(0,0,0);
        skyBoxMaterial.specularColor = new Color3(0,0,0);
        skybox.material = skyBoxMaterial; 
    }

    createVideoSkyDome(scene:Scene)
    {
        const dome = new VideoDome(
            'videoDome',
            'assets/video/pebbly_beach_headland-360.mp4',
            {
                resolution: 32,
                size:1000
            },
            scene
        )
    }

    addInspectorKeyboardShortcut(scene:Scene)
    {
        scene.debugLayer.show();
        window.addEventListener('keydown', e => {
            if(e.ctrlKey && e.altKey && e.key === 'i') {
                
                if(scene.debugLayer.isVisible())
                {
                    scene.debugLayer.hide();
                }
                else{
                    scene.debugLayer.show();
                }
            }
        });
    }

    loadModel(scene: Scene)
    {
        SceneLoader.ImportMeshAsync('','assets/models/', 'H2O.glb', scene).then(result => {
            const root = result.meshes[0];
            root.id = 'h2oRoot';
            root.name = 'h2oRoot';
            root.position.y = -1;
            root.rotation = new Vector3(0,0,Math.PI);
            root.scaling.setAll(1.5);
            this.createAnimation(scene, root);
            this.createParticles(scene);
        });
    }

    createAnimation(scene:Scene, model : AbstractMesh)
    {
        const animation = new Animation(
            'rotationAnima',
            'rotation',
            30,
            Animation.ANIMATIONTYPE_VECTOR3,
            Animation.ANIMATIONLOOPMODE_CYCLE
        );
        const keyframes = [
            {frame: 0, value: new Vector3(0,0,0)},
            {frame: 30, value: new Vector3(0,2*Math.PI,0)}
        ]

        animation.setKeys(keyframes);

        model.animations = [];
        model.animations.push(animation);
        scene.beginAnimation(model, 0, 30 , true);
    }

    createParticles(scene:Scene)
    {
        const particleSystem = new ParticleSystem('particles', 5000, scene);
        particleSystem.particleTexture = new Texture('assets/texture/Flare.png', scene);

        particleSystem.emitter = new Vector3(0,0,0);
        particleSystem.minEmitBox = new Vector3(0,0,0);
        particleSystem.maxEmitBox = new Vector3(0,0,0);

        particleSystem.color1 = new Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color1 = new Color4(0.3, 0.5, 1.0, 1.0);

        particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE

        particleSystem.minSize = 0.01;
        particleSystem.maxSize = 0.05;

        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.5;

        particleSystem.emitRate = 1500;

        particleSystem.direction1 = new Vector3(-1, 8, 1);
        particleSystem.direction2 = new Vector3(1,8,-1);

        particleSystem.minEmitPower = 0.2;
        particleSystem.maxEmitPower = 0.8;
        particleSystem.updateSpeed = 0.01;

        particleSystem.gravity = new Vector3(0, -9.8, 0);
        particleSystem.start();
    }

    //@todo fix this
    addSounds(scene : Scene)
    {
        const music = new Sound('music', 'assets/sounds/hello-xr.mp3', scene, null, {loop: true, autoplay: false});
        this.sound = new Sound('sound', 'assets/sounds/button.mp3', scene, ()=>this.sound.play());
    }

    createText(scene : Scene)
    {
        //plane
        const helloPlane = MeshBuilder.CreatePlane('hello plane', { width:2.5, height: 1.0 });
        helloPlane.position.y = 0;
        helloPlane.position.z = 5;

        //Texture
        const helloTexture = AdvancedDynamicTexture.CreateForMesh(helloPlane, 250, 100, false);
        helloTexture.background = 'white';

        //text
        const helloText = new TextBlock('hello');
        helloText.text = 'Hello XR';
        helloText.color = 'purple';
        helloText.fontSize = 50;
        helloTexture.addControl(helloText);
        helloText.onPointerClickObservable.add(evtData => {
            alert('Hello Text at:\n x: ' + evtData.x + ' y:' + evtData);
        });
        helloText.onPointerDownObservable.add(() =>{
            //this.sound.play();
        })
    }
}