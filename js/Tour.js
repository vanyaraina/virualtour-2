AFRAME.registerComponent("tour", {
  schema:{
    state: {type: "string", default: "places-list"},
    selectedCard: {type: "string", default: "#card1"}
  },
  init: function () {
    this.placeContainer = this.el;
    this.createCards();
  },

  tick:function(){
    const {state}= this.el.getAttribute("tour")
    console.log("state", state)
    if(state== "view"){
      this.hideElement([this.placeContainer])
    }
  },

  hideElement:function(elementList){
    elementList.map(i=>{
      console.log(i)
      i.setAttribute("visible", false)
      this.showView()
    })
  },

  showView:function(){
    const {selectedCard}= this.mydata
    const sky = document.querySelector("#main-container")
    sky.setAttribute("material",{
      src : `360_images/${selectedCard}/place-0.jpg`,
      color: "white"
    })
  },

  createCards: function () {
    const mydata = [
      {
        id: "taj_mahal",
        title: "Taj Mahal",
        url: "assets/thumbnails/taj_mahal.png",
      },

      {
        id: "new_york_city",
        title: "New york",
        url: "assets/thumbnails/new_york_city.png",
      },

      {
        id: "eiffel_tower",
        title: "Eiffel Tower",
        url: "assets/thumbnails/eiffel_tower.jpg",
      },

      {
        id: "budapest",
        title: "Budapest",
        url: "assets/thumbnails/budapest.jpg",
      },
    ];

    const container = document.querySelector("#places-container");
    
    var prevposX = -60
    for (var item of mydata) {
      //console.log(item);
      const posX = prevposX+25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevposX=posX

      
      const border = this.createBorders(position, item.id);
      const images = this.createImages(item)
      border.appendChild(images)

      const title = this.createTitle(position, item)
      border.appendChild(title)
      
    
      this.placeContainer.appendChild(border);
    }
  },

  createBorders: function (position, id) {
    const entity = document.createElement("a-entity");
    entity.setAttribute("id", id);
    entity.setAttribute("position", position);
    entity.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 8,
      radiusOuter: 9,
    });

    entity.setAttribute("material", {
      color: "red",
      opacity: 1,
    });
    entity.setAttribute("cursor-listener",{ })
    return entity;
  },

  createImages: function (item) {
    const entity = document.createElement("a-entity");
    entity.setAttribute("visible", true);
    entity.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });

    entity.setAttribute("material", {
      src: item.url
    });
    return entity;
  },

  createTitle:function(position, item){
    const entity = document.createElement("a-entity");
    entity.setAttribute("visible", true);
    entity.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 80,
      color:"black",
      value: item.title
    });

    const ElPos = position
    //ElPos.x = 10
    ElPos.y = -20
    entity.setAttribute("position", ElPos)
    return entity;
  }


});
