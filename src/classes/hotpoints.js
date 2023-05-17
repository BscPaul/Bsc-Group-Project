/*
    Development build version: 0.1
    Build date: 02/03/2023
    Author: Bsc Team Project Group 2023
    Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('hotpoint', {
    schema: {
        room:{type:"string",default:""},
        points: {type:"string", default:""},
    },

    init: function() {

        var newSky = this.data.room;
        var newPoints = this.data.points;

        this.setSky = function() {
            var sky = document.querySelector('#img-360');
            sky.setAttribute("src", newSky);

            // Add these lines to update the current entity display text
            const camera = document.querySelector('[camera]');
            const currentEntityDisplay = camera.components['current-entity-display'];
            if (currentEntityDisplay) {
            currentEntityDisplay.updateCurrentEntity();
            }
        }

        this.setHidden = function() {
            var current_hotpoint = this.parentElement.getAttribute("id");
            var hotpoint = document.querySelector('#'+current_hotpoint);
            hotpoint.setAttribute("scale","0 0 0");
            console.log(current_hotpoint);
        }

        this.setVisible = function() {
            var newPoint = document.querySelector('#'+newPoints);
            newPoint.setAttribute("scale","1 1 1");
            // document.getElementById("#"+newPoints).hidden = false; newPoints.setAttribute("visible", "true");
        }

        this.main = function() {
            this.setHidden;
            this.setSky;
            this.setVisible;
        }

        this.el.addEventListener('click', this.setSky);
        this.el.addEventListener('click', this.setHidden);
        this.el.addEventListener('click', this.setVisible);

    },
    update: function() {},
    remove: function() {
        this.el.removeEventListener('click', this.setSky);
        this.el.removeEventListener('click', this.setHidden);
        this.el.removeEventListener('click', this.setVisible);
    }
})

