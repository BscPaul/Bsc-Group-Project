/*
    Development build version: 0.1
    Build date: 02/03/2023
    Author: Bsc Team Project Group 2023
    Description: Hotpoint Navigation Components
*/

AFRAME.registerComponent('menu', {
    schema: {
        title:{type:"string",default:""},
        description: {type:"string", default:""},
    },

    init: function() {

        var title = this.data.title;
        var description = this.data.description;
        var desc_background = "#informationpointBackground";
        var hotpointfile = "#informationpoint";
        
        function setInformation(current_information_point) {
            // Replace Hotpoint Icon for information box
            var hotpoint = document.querySelector('#'+current_information_point);
            hotpoint.setAttribute("src", desc_background);
            hotpoint.setAttribute("scale", "10 10 10");

            // Get child text elements
            var childs = hotpoint.querySelectorAll('a-text');
            
            // Access childs
            childs.forEach(function(childE) {

                // Update child elements attributes
                if (childE.getAttribute("id") == "title") {
                    childE.setAttribute('scale', "1 1 1");
                    childE.setAttribute('value', title);
                } else if (childE.getAttribute("id") == "desc") {
                    childE.setAttribute('scale', "1 1 1");
                    childE.setAttribute('value', description);
                }
            });
        }

        function setInformationIcon(current_information_point) {
            // Set this element to Icon
            var hotpoint = document.querySelector('#'+current_information_point);
            hotpoint.setAttribute("src", hotpointfile);
            hotpoint.setAttribute("scale", "1 1 1");

            // Get child text elements
            var childs = hotpoint.querySelectorAll('a-text');
            
            // Access childs
            childs.forEach(function(childE) {
                childE.setAttribute('scale', "0 0 0");
            });

        }

        this.setMenu = function() {

            var current_information_point = this.getAttribute("src");

            var element = this.getAttribute("id");

            if (current_information_point === desc_background) {
                setInformationIcon(element);

            } else {
                var current_information_point = this.getAttribute("id");
                setInformation(element);
            }
        }
        this.el.addEventListener('click', this.setMenu);
    },
    update: function() {},
    remove: function() {
        this.el.removeEventListener('click', this.setMenu);
    }
})
