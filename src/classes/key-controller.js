AFRAME.registerComponent('key-controller', {
    init: function () {
      // Reference to the 'img-360' element
      var sky = document.querySelector('#img-360');
  
      // Get all the available rooms and hotpoints in arrays
      var rooms = document.querySelectorAll('[data-sky]');
      var hotpointEntities = document.querySelectorAll('[data-hotpoint-entities]');
      var roomIndex = 0;
  
      // Function to show the hotpoints associated with the current sky
      var showHotpoints = function(index) {
        hotpointEntities.forEach(function(hotpointEntity, i) {
          if (i === index) {
            hotpointEntity.setAttribute('scale', '1 1 1');
          } else {
            hotpointEntity.setAttribute('scale', '0 0 0');
          }
        });
      };
  
      /*
        This function updates the current location display text by calling the
        'updateCurrentEntity' function in the 'current-entity-display' component.
      */
      var updateCurrentEntityDisplay = function() {
        const camera = document.querySelector('[camera]');
        const currentEntityDisplay = camera.components['current-entity-display'];
        if (currentEntityDisplay) {
          currentEntityDisplay.updateCurrentEntity();
        }
      };
  
      // Function to move to the next sky
      var nextSky = function() {
        roomIndex++;
        if (roomIndex >= rooms.length) {
          roomIndex = 0;
        }
        // update sky and hotpoints
        updateSkyAndHotpoints();
      };
  
      // Function to move to the previous sky
      var previousSky = function() {
        roomIndex--;
        if (roomIndex < 0) {
          roomIndex = rooms.length - 1;
        }
        // update sky and hotpoints
        updateSkyAndHotpoints();
      };
  
      // Function to update the sky and hotpoints
      var updateSkyAndHotpoints = function() {
        sky.setAttribute('src', rooms[roomIndex].getAttribute('data-sky'));
        console.log(sky.getAttribute('src'));
        showHotpoints(roomIndex);
  
        // Update the current location display text
        updateCurrentEntityDisplay();
      };
  
      // Keydown event listener
      var onKeyDown = function (event) {
        switch (event.key) {
          case 'w':
          case 'ArrowUp':
            nextSky();
            break;
          case 's':
          case 'ArrowDown':
            previousSky();
            break;
        }
      };
  
      // Attach the event listener
      window.addEventListener('keydown', onKeyDown);
  
      // Clean up when the component is removed
      this.el.addEventListener('detached', function () {
        window.removeEventListener('keydown', onKeyDown);
      });
    }
  });
  