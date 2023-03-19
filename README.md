# CSD3120_IPA
**Author:** Phang Jia Rong

**ID:** 2001145

# Application Notes

This application simulates chemical bonding of different atoms together (Carbon, Hydrogen, and Oxygen) to create stable molecules.

This experience is meant to be accessed in VR and preferably using a Quest 2.

The interactions are as follows:

    1. Picking up atoms and placing them on the chalkboard using the grip button.
    2. Scaling of atoms and molecules by gripping them and pinching with both hands.
    3. Moving around by sliding using the left thumbstick.
    4. Teleport using the right thumbstick and releasing
    5. Creating and deleting atoms by gripping the buttons on the left of the chalkboard.
    6. Creating and deleting molecules by gripping the buttons on the right of the chalkboard.
    7. Deletion of molecules and atoms by placing them in the green trash bins.

The following molecules that can be created using the chalkboard are as follows:

    1. Hydrogen Gas (H2)
    2. Oxygen Gas (O2)
    3. Water (H2O) 
    4. Hydrogen Peroxide (H2O2)
    5. Carbon Monoxide (CO)
    6. Carbon Dioxide (CO2)
    7. Methane (CH4)
    8. Acetylene (C2H2)
    
# Running the Application

Open with the Meta Quest Browser and press the VR selection on the bottom right to start

    https://pwnjustright.github.io/CSD3120_IPA/

**Alternatively, ensure that you have installed:**

    npm 
    nodejs

**To install dependencies:**

    Run the terminal in your folder directory and run the command: "npm install"

**To run the serve:**

	Type into the terminal "npm run serve"

    Open your browser and go to http://localhost:3000/

# Others

**A2 Video Links:**

    https://www.youtube.com/watch?v=C3bipPu3flE

    https://drive.google.com/file/d/11rPX4sAp3au4ntdBEwJFVTgS__q3FyBH/view?usp=share_link

**B Criteria**

Unity build is found inside the src folder, to open the project in unity:

    1. Open the src folder with unity
    2. Import necessary libraries/project settings (if any)
    3. Navigate to the Desert Scene using the project window's search bar

Alternatively, link of unity project is in Google Drive:

    https://drive.google.com/file/d/1v9i1xbI1WX7VwDqS8HPkoVRhbJCaB29z/view?usp=sharing

Note: If the icons are too big in the scene view, you can update the size of the 3D icons in the top right of the scene window. (Click on the drop-down arrow beside the gizmos icon)

# Project Structure

```bash
CSD3120_IPA
│   .gitignore
│   index.html
│   ipa-a-feedback.md
│   package-lock.json
│   package.json
│   README.md
│   test.txt
│   
├───assets
│   ├───editorSessions
│   │       0.json
│   │       
│   ├───meta
│   │       meta.json
│   │       
│   ├───models
│   │       H2.glb
│   │       H2O.glb
│   │       O2.glb
│   │       
│   ├───recordingData
│   │       0.json
│   │       
│   └───videos
│           0.webm
│           
├───Build
│       Build.data
│       Build.framework.js
│       Build.loader.js
│       Build.wasm
│       
├───public
│   ├───Build
│   │       Build.data
│   │       Build.framework.js
│   │       Build.loader.js
│   │       Build.wasm
│   │       
│   ├───StreamingAssets
│   │       UnityServicesProjectConfiguration.json
│   │       
│   └───TemplateData
│           favicon.ico
│           fullscreen-button.png
│           progress-bar-empty-dark.png
│           progress-bar-empty-light.png
│           progress-bar-full-dark.png
│           progress-bar-full-light.png
│           style.css
│           unity-logo-dark.png
│           unity-logo-light.png
│           webgl-logo.png
│           
├───src
│   ├───Assets
│   │   │   Models.meta
│   │   │   Prefab.meta
│   │   │   Samples.meta
│   │   │   Scenes.meta
│   │   │   Scripts.meta
│   │   │   TextMesh Pro.meta
│   │   │   VRTK.Tilia.Package.Importer.meta
│   │   │   WebGLTemplates.meta
│   │   │   WebXRAddon.meta
│   │   │   XR.meta
│   │   │   
│   │   ├───Models
│   │   │   │   C2H2.glb
│   │   │   │   C2H2.glb.meta
│   │   │   │   CH4.glb
│   │   │   │   CH4.glb.meta
│   │   │   │   CO.glb
│   │   │   │   CO.glb.meta
│   │   │   │   CO2.glb
│   │   │   │   CO2.glb.meta
│   │   │   │   H2.glb
│   │   │   │   H2.glb.meta
│   │   │   │   H2O.glb
│   │   │   │   H2O.glb.meta
│   │   │   │   h2o2.glb
│   │   │   │   h2o2.glb.meta
│   │   │   │   Material.meta
│   │   │   │   O2.glb
│   │   │   │   O2.glb.meta
│   │   │   │   
│   │   │   └───Material
│   │   │       │   BBorder.mat
│   │   │       │   BBorder.mat.meta
│   │   │       │   Black.mat
│   │   │       │   Black.mat.meta
│   │   │       │   Blackboard.mat
│   │   │       │   Blackboard.mat.meta
│   │   │       │   Chalk.mat
│   │   │       │   Chalk.mat.meta
│   │   │       │   Highlight.mat
│   │   │       │   Highlight.mat.meta
│   │   │       │   Red.mat
│   │   │       │   Red.mat.meta
│   │   │       │   RubbishMaterial.mat
│   │   │       │   RubbishMaterial.mat.meta
│   │   │       │   Textures.meta
│   │   │       │   
│   │   │       └───Textures
│   │   │               6-chalk-circle-4.png
│   │   │               6-chalk-circle-4.png.meta
│   │   │               blackboardPic.jpg
│   │   │               blackboardPic.jpg.meta
│   │   │               border.jpg
│   │   │               border.jpg.meta
│   │   │               C2H2.png
│   │   │               C2H2.png.meta
│   │   │               CH4.png
│   │   │               CH4.png.meta
│   │   │               CO.png
│   │   │               CO.png.meta
│   │   │               CO2.png
│   │   │               CO2.png.meta
│   │   │               h2.png
│   │   │               h2.png.meta
│   │   │               H2O.png
│   │   │               H2O.png.meta
│   │   │               H2O2.png
│   │   │               H2O2.png.meta
│   │   │               O2.png
│   │   │               O2.png.meta
│   │   │               pngegg.png
│   │   │               pngegg.png.meta
│   │   │               
│   │   ├───Prefab
│   │   │       Interactions.Interactable_c.prefab
│   │   │       Interactions.Interactable_c.prefab.meta
│   │   │       Interactions.Interactable_C2H2.prefab
│   │   │       Interactions.Interactable_C2H2.prefab.meta
│   │   │       Interactions.Interactable_CH4.prefab
│   │   │       Interactions.Interactable_CH4.prefab.meta
│   │   │       Interactions.Interactable_CO.prefab
│   │   │       Interactions.Interactable_CO.prefab.meta
│   │   │       Interactions.Interactable_CO2.prefab
│   │   │       Interactions.Interactable_CO2.prefab.meta
│   │   │       Interactions.Interactable_h.prefab
│   │   │       Interactions.Interactable_h.prefab.meta
│   │   │       Interactions.Interactable_h2.prefab
│   │   │       Interactions.Interactable_h2.prefab.meta
│   │   │       Interactions.Interactable_h2o.prefab
│   │   │       Interactions.Interactable_h2o.prefab.meta
│   │   │       Interactions.Interactable_h2o2.prefab
│   │   │       Interactions.Interactable_h2o2.prefab.meta
│   │   │       Interactions.Interactable_o.prefab
│   │   │       Interactions.Interactable_o.prefab.meta
│   │   │       Interactions.Interactable_o2.prefab
│   │   │       Interactions.Interactable_o2.prefab.meta
│   │   │       Interactions.SnapZone.prefab
│   │   │       Interactions.SnapZone.prefab.meta
│   │   │       TrashCan.prefab
│   │   │       TrashCan.prefab.meta
│   │   │       
│   │   ├───Samples
│   │   │   │   WebXR Interactions.meta
│   │   │   │   
│   │   │   └───WebXR Interactions
│   │   │       │   0.16.3-preview.meta
│   │   │       │   
│   │   │       └───0.16.3-preview
│   │   │           │   Sample Scene.meta
│   │   │           │   
│   │   │           └───Sample Scene
│   │   │               │   Materials.meta
│   │   │               │   Models.meta
│   │   │               │   Prefabs.meta
│   │   │               │   Scenes.meta
│   │   │               │   Sounds.meta
│   │   │               │   Textures.meta
│   │   │               │   
│   │   │               ├───Materials
│   │   │               │       Blue.mat
│   │   │               │       Blue.mat.meta
│   │   │               │       cube-sea.mat
│   │   │               │       cube-sea.mat.meta
│   │   │               │       Cyan.mat
│   │   │               │       Cyan.mat.meta
│   │   │               │       Green.mat
│   │   │               │       Green.mat.meta
│   │   │               │       Ground.mat
│   │   │               │       Ground.mat.meta
│   │   │               │       Orange.mat
│   │   │               │       Orange.mat.meta
│   │   │               │       Pink.mat
│   │   │               │       Pink.mat.meta
│   │   │               │       Red.mat
│   │   │               │       Red.mat.meta
│   │   │               │       ReflectedMat.mat
│   │   │               │       ReflectedMat.mat.meta
│   │   │               │       SkyBox.mat
│   │   │               │       SkyBox.mat.meta
│   │   │               │       TransparentTest.mat
│   │   │               │       TransparentTest.mat.meta
│   │   │               │       Yellow.mat
│   │   │               │       Yellow.mat.meta
│   │   │               │       
│   │   │               ├───Models
│   │   │               │   │   cactus.meta
│   │   │               │   │   Desert Environment.meta
│   │   │               │   │   handL.dae
│   │   │               │   │   handL.dae.meta
│   │   │               │   │   handR.dae
│   │   │               │   │   handR.dae.meta
│   │   │               │   │   pipeorgancactus.meta
│   │   │               │   │   TakeL.controller
│   │   │               │   │   TakeL.controller.meta
│   │   │               │   │   TakeR.controller
│   │   │               │   │   TakeR.controller.meta
│   │   │               │   │   
│   │   │               │   ├───cactus
│   │   │               │   │   │   Materials.meta
│   │   │               │   │   │   Saguaro.obj
│   │   │               │   │   │   Saguaro.obj.meta
│   │   │               │   │   │   Saguaro_BaseColor.png
│   │   │               │   │   │   Saguaro_BaseColor.png.meta
│   │   │               │   │   │   
│   │   │               │   │   └───Materials
│   │   │               │   │           Saguaro_BaseColor 1.mat
│   │   │               │   │           Saguaro_BaseColor 1.mat.meta
│   │   │               │   │           Saguaro_BaseColor 2.mat
│   │   │               │   │           Saguaro_BaseColor 2.mat.meta
│   │   │               │   │           Saguaro_BaseColor 3.mat
│   │   │               │   │           Saguaro_BaseColor 3.mat.meta
│   │   │               │   │           Saguaro_BaseColor.mat
│   │   │               │   │           Saguaro_BaseColor.mat.meta
│   │   │               │   │           
│   │   │               │   ├───Desert Environment
│   │   │               │   │       desert-environment.mtl
│   │   │               │   │       desert-environment.mtl.meta
│   │   │               │   │       desert-environment.obj
│   │   │               │   │       desert-environment.obj.meta
│   │   │               │   │       
│   │   │               │   └───pipeorgancactus
│   │   │               │       │   Materials.meta
│   │   │               │       │   PipeOrganCactus.obj
│   │   │               │       │   PipeOrganCactus.obj.meta
│   │   │               │       │   PipeOrganCactus_BaseColor.png
│   │   │               │       │   PipeOrganCactus_BaseColor.png.meta
│   │   │               │       │   
│   │   │               │       └───Materials
│   │   │               │               PipeOrganCactus_BaseColor.mat
│   │   │               │               PipeOrganCactus_BaseColor.mat.meta
│   │   │               │               
│   │   │               ├───Prefabs
│   │   │               │       SpectatorCameraHolder.prefab
│   │   │               │       SpectatorCameraHolder.prefab.meta
│   │   │               │       WebXRCameraSet.prefab
│   │   │               │       WebXRCameraSet.prefab.meta
│   │   │               │       
│   │   │               ├───Scenes
│   │   │               │   │   Desert.meta
│   │   │               │   │   Desert.unity
│   │   │               │   │   Desert.unity.meta
│   │   │               │   │   DesertSettings.lighting
│   │   │               │   │   DesertSettings.lighting.meta
│   │   │               │   │   
│   │   │               │   └───Desert
│   │   │               │           LightingData.asset
│   │   │               │           LightingData.asset.meta
│   │   │               │           Lightmap-0_comp_light.exr
│   │   │               │           Lightmap-0_comp_light.exr.meta
│   │   │               │           Lightmap-1_comp_light.exr
│   │   │               │           Lightmap-1_comp_light.exr.meta
│   │   │               │           ReflectionProbe-0.exr
│   │   │               │           ReflectionProbe-0.exr.meta
│   │   │               │           ReflectionProbe-1.exr
│   │   │               │           ReflectionProbe-1.exr.meta
│   │   │               │           ReflectionProbe-2.exr
│   │   │               │           ReflectionProbe-2.exr.meta
│   │   │               │           ReflectionProbe-3.exr
│   │   │               │           ReflectionProbe-3.exr.meta
│   │   │               │           ReflectionProbe-4.exr
│   │   │               │           ReflectionProbe-4.exr.meta
│   │   │               │           ReflectionProbe-5.exr
│   │   │               │           ReflectionProbe-5.exr.meta
│   │   │               │           ReflectionProbe-6.exr
│   │   │               │           ReflectionProbe-6.exr.meta
│   │   │               │           
│   │   │               ├───Sounds
│   │   │               │       wind-soundscape.mp3
│   │   │               │       wind-soundscape.mp3.meta
│   │   │               │       
│   │   │               └───Textures
│   │   │                       cube-sea.png
│   │   │                       cube-sea.png.meta
│   │   │                       ground.png
│   │   │                       ground.png.meta
│   │   │                       groundnormal.png
│   │   │                       groundnormal.png.meta
│   │   │                       
│   │   ├───Scenes
│   │   │       SampleScene.unity
│   │   │       SampleScene.unity.meta
│   │   │       
│   │   ├───Scripts
│   │   │       AtomSpawner.cs
│   │   │       AtomSpawner.cs.meta
│   │   │       MoleculeManager.cs
│   │   │       MoleculeManager.cs.meta
│   │   │       MoleculeSpawner.cs
│   │   │       MoleculeSpawner.cs.meta
│   │   │       TrashBin.cs
│   │   │       TrashBin.cs.meta
│   │   │       WebXRCameraInput.cs
│   │   │       WebXRCameraInput.cs.meta
│   │   │       
│   │   ├───TextMesh Pro
│   │   │   │   Documentation.meta
│   │   │   │   Fonts.meta
│   │   │   │   Resources.meta
│   │   │   │   Shaders.meta
│   │   │   │   Sprites.meta
│   │   │   │   
│   │   │   ├───Documentation
│   │   │   │       TextMesh Pro User Guide 2016.pdf
│   │   │   │       TextMesh Pro User Guide 2016.pdf.meta
│   │   │   │       
│   │   │   ├───Fonts
│   │   │   │       LiberationSans - OFL.txt
│   │   │   │       LiberationSans - OFL.txt.meta
│   │   │   │       LiberationSans.ttf
│   │   │   │       LiberationSans.ttf.meta
│   │   │   │       
│   │   │   ├───Resources
│   │   │   │   │   Fonts & Materials.meta
│   │   │   │   │   LineBreaking Following Characters.txt
│   │   │   │   │   LineBreaking Following Characters.txt.meta
│   │   │   │   │   LineBreaking Leading Characters.txt
│   │   │   │   │   LineBreaking Leading Characters.txt.meta
│   │   │   │   │   Sprite Assets.meta
│   │   │   │   │   Style Sheets.meta
│   │   │   │   │   TMP Settings.asset
│   │   │   │   │   TMP Settings.asset.meta
│   │   │   │   │   
│   │   │   │   ├───Fonts & Materials
│   │   │   │   │       LiberationSans SDF - Drop Shadow.mat
│   │   │   │   │       LiberationSans SDF - Drop Shadow.mat.meta
│   │   │   │   │       LiberationSans SDF - Fallback.asset
│   │   │   │   │       LiberationSans SDF - Fallback.asset.meta
│   │   │   │   │       LiberationSans SDF - Outline.mat
│   │   │   │   │       LiberationSans SDF - Outline.mat.meta
│   │   │   │   │       LiberationSans SDF.asset
│   │   │   │   │       LiberationSans SDF.asset.meta
│   │   │   │   │       
│   │   │   │   ├───Sprite Assets
│   │   │   │   │       EmojiOne.asset
│   │   │   │   │       EmojiOne.asset.meta
│   │   │   │   │       
│   │   │   │   └───Style Sheets
│   │   │   │           Default Style Sheet.asset
│   │   │   │           Default Style Sheet.asset.meta
│   │   │   │           
│   │   │   ├───Shaders
│   │   │   │       TMPro.cginc
│   │   │   │       TMPro.cginc.meta
│   │   │   │       TMPro_Mobile.cginc
│   │   │   │       TMPro_Mobile.cginc.meta
│   │   │   │       TMPro_Properties.cginc
│   │   │   │       TMPro_Properties.cginc.meta
│   │   │   │       TMPro_Surface.cginc
│   │   │   │       TMPro_Surface.cginc.meta
│   │   │   │       TMP_Bitmap-Custom-Atlas.shader
│   │   │   │       TMP_Bitmap-Custom-Atlas.shader.meta
│   │   │   │       TMP_Bitmap-Mobile.shader
│   │   │   │       TMP_Bitmap-Mobile.shader.meta
│   │   │   │       TMP_Bitmap.shader
│   │   │   │       TMP_Bitmap.shader.meta
│   │   │   │       TMP_SDF Overlay.shader
│   │   │   │       TMP_SDF Overlay.shader.meta
│   │   │   │       TMP_SDF SSD.shader
│   │   │   │       TMP_SDF SSD.shader.meta
│   │   │   │       TMP_SDF-Mobile Masking.shader
│   │   │   │       TMP_SDF-Mobile Masking.shader.meta
│   │   │   │       TMP_SDF-Mobile Overlay.shader
│   │   │   │       TMP_SDF-Mobile Overlay.shader.meta
│   │   │   │       TMP_SDF-Mobile SSD.shader
│   │   │   │       TMP_SDF-Mobile SSD.shader.meta
│   │   │   │       TMP_SDF-Mobile.shader
│   │   │   │       TMP_SDF-Mobile.shader.meta
│   │   │   │       TMP_SDF-Surface-Mobile.shader
│   │   │   │       TMP_SDF-Surface-Mobile.shader.meta
│   │   │   │       TMP_SDF-Surface.shader
│   │   │   │       TMP_SDF-Surface.shader.meta
│   │   │   │       TMP_SDF.shader
│   │   │   │       TMP_SDF.shader.meta
│   │   │   │       TMP_Sprite.shader
│   │   │   │       TMP_Sprite.shader.meta
│   │   │   │       
│   │   │   └───Sprites
│   │   │           EmojiOne Attribution.txt
│   │   │           EmojiOne Attribution.txt.meta
│   │   │           EmojiOne.json
│   │   │           EmojiOne.json.meta
│   │   │           EmojiOne.png
│   │   │           EmojiOne.png.meta
│   │   │           
│   │   ├───VRTK.Tilia.Package.Importer
│   │   │   │   Editor.meta
│   │   │   │   LICENSE
│   │   │   │   LICENSE.meta
│   │   │   │   README.md
│   │   │   │   README.md.meta
│   │   │   │   
│   │   │   └───Editor
│   │   │       │   PackageImporter.cs
│   │   │       │   PackageImporter.cs.meta
│   │   │       │   ThirdParty.meta
│   │   │       │   VRTK.Tilia.Package.Importer.Editor.asmdef
│   │   │       │   VRTK.Tilia.Package.Importer.Editor.asmdef.meta
│   │   │       │   
│   │   │       └───ThirdParty
│   │   │           │   SimpleJSON.meta
│   │   │           │   
│   │   │           └───SimpleJSON
│   │   │                   Changelog.txt
│   │   │                   Changelog.txt.meta
│   │   │                   LICENSE
│   │   │                   LICENSE.meta
│   │   │                   README
│   │   │                   README.meta
│   │   │                   SimpleJSON.cs
│   │   │                   SimpleJSON.cs.meta
│   │   │                   SimpleJSONBinary.cs
│   │   │                   SimpleJSONBinary.cs.meta
│   │   │                   SimpleJSONDotNetTypes.cs
│   │   │                   SimpleJSONDotNetTypes.cs.meta
│   │   │                   SimpleJSONUnity.cs
│   │   │                   SimpleJSONUnity.cs.meta
│   │   │                   
│   │   ├───WebGLTemplates
│   │   │   │   WebXR.meta
│   │   │   │   WebXR2020.meta
│   │   │   │   WebXRFullView.meta
│   │   │   │   WebXRFullView2020.meta
│   │   │   │   
│   │   │   ├───WebXR
│   │   │   │   │   index.html
│   │   │   │   │   index.html.meta
│   │   │   │   │   TemplateData.meta
│   │   │   │   │   thumbnail.png
│   │   │   │   │   thumbnail.png.meta
│   │   │   │   │   
│   │   │   │   └───TemplateData
│   │   │   │           favicon.ico
│   │   │   │           favicon.ico.meta
│   │   │   │           fullscreen.png
│   │   │   │           fullscreen.png.meta
│   │   │   │           progressEmpty.Dark.png
│   │   │   │           progressEmpty.Dark.png.meta
│   │   │   │           progressEmpty.Light.png
│   │   │   │           progressEmpty.Light.png.meta
│   │   │   │           progressFull.Dark.png
│   │   │   │           progressFull.Dark.png.meta
│   │   │   │           progressFull.Light.png
│   │   │   │           progressFull.Light.png.meta
│   │   │   │           progressLogo.Dark.png
│   │   │   │           progressLogo.Dark.png.meta
│   │   │   │           progressLogo.Light.png
│   │   │   │           progressLogo.Light.png.meta
│   │   │   │           style.css
│   │   │   │           style.css.meta
│   │   │   │           UnityProgress.js
│   │   │   │           UnityProgress.js.meta
│   │   │   │           webgl-logo.png
│   │   │   │           webgl-logo.png.meta
│   │   │   │           
│   │   │   ├───WebXR2020
│   │   │   │   │   index.html
│   │   │   │   │   index.html.meta
│   │   │   │   │   TemplateData.meta
│   │   │   │   │   thumbnail.png
│   │   │   │   │   thumbnail.png.meta
│   │   │   │   │   
│   │   │   │   └───TemplateData
│   │   │   │           favicon.ico
│   │   │   │           favicon.ico.meta
│   │   │   │           fullscreen-button.png
│   │   │   │           fullscreen-button.png.meta
│   │   │   │           progress-bar-empty-dark.png
│   │   │   │           progress-bar-empty-dark.png.meta
│   │   │   │           progress-bar-empty-light.png
│   │   │   │           progress-bar-empty-light.png.meta
│   │   │   │           progress-bar-full-dark.png
│   │   │   │           progress-bar-full-dark.png.meta
│   │   │   │           progress-bar-full-light.png
│   │   │   │           progress-bar-full-light.png.meta
│   │   │   │           style.css
│   │   │   │           style.css.meta
│   │   │   │           unity-logo-dark.png
│   │   │   │           unity-logo-dark.png.meta
│   │   │   │           unity-logo-light.png
│   │   │   │           unity-logo-light.png.meta
│   │   │   │           webgl-logo.png
│   │   │   │           webgl-logo.png.meta
│   │   │   │           
│   │   │   ├───WebXRFullView
│   │   │   │   │   index.html
│   │   │   │   │   index.html.meta
│   │   │   │   │   TemplateData.meta
│   │   │   │   │   thumbnail.png
│   │   │   │   │   thumbnail.png.meta
│   │   │   │   │   
│   │   │   │   └───TemplateData
│   │   │   │           favicon.ico
│   │   │   │           favicon.ico.meta
│   │   │   │           fullscreen.png
│   │   │   │           fullscreen.png.meta
│   │   │   │           progressEmpty.Dark.png
│   │   │   │           progressEmpty.Dark.png.meta
│   │   │   │           progressEmpty.Light.png
│   │   │   │           progressEmpty.Light.png.meta
│   │   │   │           progressFull.Dark.png
│   │   │   │           progressFull.Dark.png.meta
│   │   │   │           progressFull.Light.png
│   │   │   │           progressFull.Light.png.meta
│   │   │   │           progressLogo.Dark.png
│   │   │   │           progressLogo.Dark.png.meta
│   │   │   │           progressLogo.Light.png
│   │   │   │           progressLogo.Light.png.meta
│   │   │   │           style.css
│   │   │   │           style.css.meta
│   │   │   │           UnityProgress.js
│   │   │   │           UnityProgress.js.meta
│   │   │   │           webgl-logo.png
│   │   │   │           webgl-logo.png.meta
│   │   │   │           
│   │   │   └───WebXRFullView2020
│   │   │       │   index.html
│   │   │       │   index.html.meta
│   │   │       │   TemplateData.meta
│   │   │       │   thumbnail.png
│   │   │       │   thumbnail.png.meta
│   │   │       │   
│   │   │       └───TemplateData
│   │   │               favicon.ico
│   │   │               favicon.ico.meta
│   │   │               fullscreen-button.png
│   │   │               fullscreen-button.png.meta
│   │   │               progress-bar-empty-dark.png
│   │   │               progress-bar-empty-dark.png.meta
│   │   │               progress-bar-empty-light.png
│   │   │               progress-bar-empty-light.png.meta
│   │   │               progress-bar-full-dark.png
│   │   │               progress-bar-full-dark.png.meta
│   │   │               progress-bar-full-light.png
│   │   │               progress-bar-full-light.png.meta
│   │   │               style.css
│   │   │               style.css.meta
│   │   │               unity-logo-dark.png
│   │   │               unity-logo-dark.png.meta
│   │   │               unity-logo-light.png
│   │   │               unity-logo-light.png.meta
│   │   │               webgl-logo.png
│   │   │               webgl-logo.png.meta
│   │   │               
│   │   ├───WebXRAddon
│   │   │       WebFloatX.cs
│   │   │       WebFloatX.cs.meta
│   │   │       WebFloatY.cs
│   │   │       WebFloatY.cs.meta
│   │   │       WebGrip.cs
│   │   │       WebGrip.cs.meta
│   │   │       WebThumb.cs
│   │   │       WebThumb.cs.meta
│   │   │       WebXRDef.asmdef
│   │   │       WebXRDef.asmdef.meta
│   │   │       
│   │   └───XR
│   │       │   Loaders.meta
│   │       │   Settings.meta
│   │       │   XRGeneralSettings.asset
│   │       │   XRGeneralSettings.asset.meta
│   │       │   
│   │       ├───Loaders
│   │       │       Web XR Loader.asset
│   │       │       Web XR Loader.asset.meta
│   │       │       
│   │       └───Settings
│   │               Web XR Settings.asset
│   │               Web XR Settings.asset.meta
│   │               
│   ├───Packages
│   │       manifest.json
│   │       packages-lock.json
│   │       
│   └───ProjectSettings
│       │   AudioManager.asset
│       │   boot.config
│       │   ClusterInputManager.asset
│       │   DynamicsManager.asset
│       │   EditorBuildSettings.asset
│       │   EditorSettings.asset
│       │   GraphicsSettings.asset
│       │   InputManager.asset
│       │   MemorySettings.asset
│       │   NavMeshAreas.asset
│       │   PackageManagerSettings.asset
│       │   Physics2DSettings.asset
│       │   PresetManager.asset
│       │   ProjectSettings.asset
│       │   ProjectVersion.txt
│       │   QualitySettings.asset
│       │   SceneTemplateSettings.json
│       │   TagManager.asset
│       │   TimelineSettings.asset
│       │   TimeManager.asset
│       │   UnityConnectSettings.asset
│       │   VersionControlSettings.asset
│       │   VFXManager.asset
│       │   XRPackageSettings.asset
│       │   XRSettings.asset
│       │   
│       └───Packages
│           ├───com.unity.probuilder
│           │       Settings.json
│           │       
│           └───com.unity.testtools.codecoverage
│                   Settings.json
│                   
├───StreamingAssets
│       UnityServicesProjectConfiguration.json
│       
└───TemplateData
        favicon.ico
        fullscreen-button.png
        progress-bar-empty-dark.png
        progress-bar-empty-light.png
        progress-bar-full-dark.png
        progress-bar-full-light.png
        style.css
        unity-logo-dark.png
        unity-logo-light.png
        webgl-logo.png
```