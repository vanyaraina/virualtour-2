AFRAME.registerComponent("place-side-view",{
    init:function(){

    },
    tick:function(){
        var placeContainer = document.querySelector("places-container")
        const {state}=placeContainer.getAttribute("tour")

        if(state=="view" || state=="change-view"){
            this.el.setAttribute("visible", true)

        }
        else{
            this.el.setAttribute("visible", false)
        }
    },

    createPlaces:function(){
        const sideViewContainer = document.querySelector("#slide-show")

        var prXPos = -50
        var prYPos = 30

        for(var i =0;i<4; i++){
            var position={
                x: (prXPos+=50),
                y: (prYPos+=5),
                z: -20
            }
        }

        const E1 = this.createImages(position, i)
        sideViewContainer.appendChild(E1)
    },

    createImages:function(position,id){
        const E1 = document.createElement("a-entity")
        E1.setAttribute("visible", true)

        entity.setAttribute("id", place-${id});
        entity.setAttribute("position", position);
        entity.setAttribute("geometry", {
          primitive: "circle",
          radius:3
        });
    
        entity.setAttribute("material", {
          color: "red",
          opacity: 0.6,
        });

        E1.setAttribute("position",position)
        E1.setAttribute("cursor-listener",{ })
        return entity;
      },
    
    
    }

})