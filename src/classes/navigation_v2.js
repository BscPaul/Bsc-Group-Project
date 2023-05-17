/*
    Development build version: 0.1
    Build date: 05/04/2023
    Author: Bsc Team Project Group 2023
    Description: Navigation Controller Component
*/

AFRAME.registerComponent('nav-controller', {
  init: function () {
    console.log("loaded");
    // Get the toggle and dropdown elements
    const toggle = document.getElementById("toggle");
    const dropdown = document.getElementById("dropdown");
    var sky = document.querySelector('#img-360');
    var rooms = document.querySelectorAll('[data-sky]');
    const hotpointEntities = document.querySelectorAll('[data-hotpoint-entities]');


    // Get all navigation buttons
    const navButtons = document.getElementsByClassName("nav-button");

    // Add click event listener to the toggle button
    toggle.addEventListener("click", function() {
      const isVisible = dropdown.getAttribute("visible");
      dropdown.setAttribute("visible", !isVisible);
      if (isVisible) {
          toggleRaycaster(false);
      } else {
          toggleRaycaster(true);
      }
    });

    // Add click event listeners to the navigation buttons
    for (const button of navButtons) {
        button.addEventListener("click", function() {
            // Update the 360 image and hotpoints
            updateDropdown(button.getAttribute("data-scene"));
        });
    }

    // Function to get the room index from the key-controller component
    function getRoomIndexFromKeyController() {
      const scene = document.querySelector('a-scene');
      const keyController = scene.components['key-controller'];
      if (keyController) {
        return keyController.roomIndex;
      }
      return -1;
    }

    // Initialize roomIndex
    roomIndex = getRoomIndexFromKeyController();

    // If roomIndex is not found from the key-controller, default to 0
    if (roomIndex === -1) {
      roomIndex = 0;
    }

    // Add the showHotpoints function
    function showHotpoints(index) {
      hotpointEntities.forEach(function (hotpointEntity, i) {
        if (i === index) {
          hotpointEntity.setAttribute('scale', '1 1 1');
        } else {
          hotpointEntity.setAttribute('scale', '0 0 0');
        }
      });
    }

    function updateSkyAndHotpoints() {
      sky.setAttribute('src', rooms[roomIndex].getAttribute('data-sky'));
      showHotpoints(roomIndex);
    
      // Update the current entity display
      const camera = document.querySelector('[camera]');
      const currentEntityDisplay = camera.components['current-entity-display'];
      if (currentEntityDisplay) {
        currentEntityDisplay.updateCurrentEntity();
      }
    }    

    function toggleRaycaster(enabled) {
        const cursor = document.getElementById("cursor");
        if (enabled) {
          cursor.setAttribute("raycaster", "objects: .nav-button, .clickable");
        } else {
          cursor.setAttribute("raycaster", "objects: .clickable");
        }
        // Refresh raycaster cache to include new nav-buttons
        cursor.components.raycaster.refreshObjects();
    }

    function updateDropdown(room) {
      // Set the new room index
      const newIndex = Array.from(rooms).findIndex(
        (r) => r.getAttribute("data-sky") === "#" + room
      );
      if (newIndex !== -1) {
        roomIndex = newIndex;
        updateSkyAndHotpoints();
      }

      // Hide the dropdown
      dropdown.setAttribute("visible", false);

      // Disable raycaster for nav-buttons
      toggleRaycaster(false);

      // Add more logic if needed:
      // ...
  }
  }
});
