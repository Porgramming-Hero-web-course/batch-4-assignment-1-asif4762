{
    //
    type Circle = {
        shape: "circle",
        radius: number,
    };
    type Ractangle = {
        shape: "rectangle",
        height: number,
        width: number,
    }

    type Shape = Circle | Ractangle;

    function calculateShapeArea(shape: Shape) : any {
        if(shape.shape === "rectangle"){
            return shape.height * shape.width;
        }
        else if(shape.shape === "circle"){
            const area = Math.PI * shape.radius * shape.radius;
            return area.toFixed(2);
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(circleArea);
      console.log(rectangleArea);
}