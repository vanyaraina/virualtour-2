AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: {type:"string", default:""},
    },
    init:function(){
        this.mouseEnterEvents()
        this.mouseLeaveEvents()
        this.mouseClickEvents()
    },
    handlePlaceLIstStaes: function(){
        const id = this.el.getAttribute("id")
        console.log("id", id)

        const placeid = ["budapest","eiffel_tower","new_york_city","taj_mahal"]
        console.log(placeid.includes(id))

        if(placeid.includes(id)){
            const placeContainer= document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener",{
                selectedItemId: id
            })
            this.el.setAttribute("material",{
                color: "green",
                opacity: 1
            })
        }

    },
    mouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", ()=>{
            console.log("mouse enter")
            this.handlePlaceLIstStaes()
        })
    },
    mouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
               // console.log("element name(mouseleave): ", el)
                const id = el.getAttribute("id")
               // console.log("element id:", el)
                if(id== selectedItemId){
                    el.setAttribute("material", {color: "red", opacity: 1})
                }
            }
        })
    },
    mouseClickEvents:function(){
        this.el.addEventListener("click", ()=>{
            const placeContainer = document.querySelector("#places-container");
            const {state} = placeContainer.getAttribute("tour");

           // console.log(state);

            if (state == "places-list"){
                const id = this.el.getAttribute("id");
                
                const placeid = ["taj-mahal", "budapest", "eiffel-tower", "new_york"];
             //   console.log(id, placeid)
                if(placeid.includes(id)){
                    placeContainer.setAttribute("tour",{
                        state: "view",
                        selectedCard: id,
                    })
                } 
            }

            if(state =="view"){
                this.handleViewStates();
            }

            if(state=="change-view"){
                this.handleViewStates();
            }
        })
    },

    handleViewStates:function(){
        const el = this.el;
        const id = this.el.getAttribute("id")
        const placeContainer = document.querySelector("#places-contaner")
        const{selectedItemId} = placeContainer.getAttribute("cursor-listener")

        const sideViewId = ["places-1","places-2","places-3","places-4"]

        console.log("id: "+id+": "+ "sideViewId: "+sideViewId)

        if(sideViewId.includes(id)){
            placeContainer.setAttribute("tour",{
                state:"change-view"
            })
        }

        const sky=document.querySelector("#main-container")
        sky.setAttribute("material",{
            src: `360_images/${selectedItemId}/${id}.jpg`
        })

    }
})