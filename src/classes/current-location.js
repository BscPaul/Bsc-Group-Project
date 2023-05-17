AFRAME.registerComponent('current-entity-display', {
    schema: {
      color: {type: 'string', default: 'white'},
      position: {type: 'vec3', default: {x: -1.2, y: 0.78, z: -1}},
      scale: {type: 'vec3', default: {x: 0.2, y: 0.2, z: 0.2}},
    },
  
    init: function() {
      // Create text element
      this.textElement = document.createElement('a-text');
      this.textElement.setAttribute('color', this.data.color);
      this.textElement.setAttribute('position', this.data.position);
      this.textElement.setAttribute('scale', this.data.scale);
      this.textElement.setAttribute('align', 'left');
      this.el.appendChild(this.textElement);

      // Update the current entity display
      this.updateCurrentEntity();
    },
  
    updateCurrentEntity: function() {
      const sky = document.querySelector('#img-360');
      const skySrc = sky.getAttribute('src');
  
      // Extract the parent entity ID from the sky source
      const parentEntityID = this.getParentEntityID(skySrc);
      this.textElement.setAttribute('value', `${parentEntityID}`);
    },
  
    getParentEntityID: function(skySrc) {
        const allChildEntities = document.querySelectorAll('[data-sky]');
        for (let i = 0; i < allChildEntities.length; i++) {
          const childEntity = allChildEntities[i];
          if (childEntity.getAttribute('data-sky') === skySrc) {
            // Return the parent entity ID
            return childEntity.parentElement.id;
          }
        }
        return '';
      }
  });
  