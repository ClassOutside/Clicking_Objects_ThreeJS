# Clicking_Objects_ThreeJS
Project made for tutorial on how to Click on objects in a 3D scene. Uses ThreeJS

--------------------------------------------------------------------------------------------------------------------
STEPS TO Click On Objects In ThreeJS:

1. Add the ./src/helpers/RayCastHelper.js file to your project and import it.
2. Create an event listener to trigger when the mouse is clicked.
3. When the mouse is clicked, call RayCastHelper.getFirstObjectWithName.
  - Provide it with the required parameters, including a string name.
  - This name is expected to be a word included in the name of the object you would like to select. 
5. RayCastHelper.getFirstObjectWithName will return the first object your mouse is hovering over, containing the desired name, or null.
  - This is done through raycasting, or drawing a line from the camera and through the mouse, and listing all objects that intersect with that line.
6. Now that you have the object being clicked on, you may perform some action.  
