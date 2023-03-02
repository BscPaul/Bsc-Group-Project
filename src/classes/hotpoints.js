/*
    Development build version: 0.1
    Build date: 02/03/2023
    Author: Bsc Team Project Group 2023
    Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('hotpoint', {
    schema: {
        room:{type:"string",default:""},
        points: {type:'string', default:""},
    },

    init: function() {

        var newSky = this.data.room;
        var newPoints = this.data.points;

        this.setSky = function() {
            console.log(1);
        }

        this.getCurrentPoints = function() {
            console.log(1);
        }

        this.setNewHotpoints = function() {
            console.log(1);
        }

    },
    update: function() {},
    remove: function() {}
})



AFRAME.registerComponent('hotpoints', {
    schema: {},

    init: function() {

        this.setHidden = function() {
            console.log(1);
        }

        this.setVisible = function() {
            console.log(1);
        }

    },
    update: function() {},
    remove: function() {}
})

