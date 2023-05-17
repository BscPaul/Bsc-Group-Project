/*
    Development build version: 0.1
    Build date: 02/03/2023
    Author: Bsc Team Project Group 2023
    Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('nav', {
    schema: {
        point:{type:"string",default:""},
    },

    init: function() {

        var point = this.data.point;

        this.setSky = function() {
            var sky = document.querySelector('#blocks');
            var childs = sky.querySelectorAll('a-entity');


            // Access childs
            childs.forEach(function(childE) {
                //console.log(childE.getAttribute("id"));
                console.log("childs:"+childE.getAttribute("scale"));
                /*if (childE.getAttribute("scale") == "1 1 1") {
                    console.log("active:"+childE);
                }
                */
            });
        }
        this.el.addEventListener('click', this.setSky);
    },
    update: function() {},
    remove: function() {
        this.el.removeEventListener('click', this.setSky);
    }
})
