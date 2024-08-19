/* Раскомментировать, когда в MineRender добавят редактирование настроек сцены
document.onmousemove = function handleMouseMove(event) {
    console.log(event.pageX, event.pageY);
    var x = (event.pageX-window.innerWidth/2)/10
    var y = (event.pageY-window.innerHeight/2)/10
    

    skinRenderPasha.reset()
    skinRenderPasha = new SkinRender({
        canvas: {
            width: 200,
            height: 500,
        },
        camera: {
            x: x,
            y: y,
            z: 30,
            target: [0, 20, 0]
        }
    }, document.getElementById("543451098"));
        skinRenderPasha.render("543451098");
    }*/