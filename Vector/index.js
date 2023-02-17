class Vector{

    constructor(){
        return
    }

     singleVector(force,degree){
        console.log("----------singleVector----------");
        let fy,fx,unit_vector;
        fy = force*Math.sin(degree);
        fx = force*Math.cos(degree);
        unit_vector = `UV = ${fx}i + ${fy}j`;
        console.log({
            unit_vector,
            fy,fx
        });
        return {
            unit_vector,
            fy,fx
        }
        
    }

     MultipleVector(forces,degrees){
        console.log("----------MultipleVector----------");

        if(forces.length == degrees.length){
            let uint = [];
            for(let i = 0;i<forces.length;i++){
                let fx,fy,unit_vector;
                fx = Number(forces[i])*Math.cos(degrees[i]);
                fy = Number(forces[i])*Math.sin(degrees[i]);
                unit_vector = `UV = ${fx}i + ${fy}j`;
                uint = [...uint,{
                    unit_vector,
                    fy,fx
                }];
            }
            return uint;
        }else{
            console.log("Forces length is <|>");
            return {
                message:"Forces length is <|>"
            }
        }
    }

     UnitVector(fx,fy){
        console.log("----------UnitVector----------");
        let unit_vector = `UV = ${fx}i + ${fy}j`;
        return unit_vector;
    }

     Magnitude(fx,fy){
        console.log("----------Magnitude----------");

        const Mag = Math.sqrt(((fx^2)+(fy^2)));
        console.log({Mag});
        return Mag;
    }

     Differences(f1,f2,dir1,dir2){
        console.log("----------Differences----------");

          let concat;
          concat = dir1.concat(dir2);
          console.log({concat})
          //if W/E (sign) | N/S (sign)...
          if(dir1==dir2) return {Ft:(f1+f2)};
          if(concat == "NW") return {degrees:(Math.tan(f2/f1))};
          if(concat == "NE") return {degrees:(Math.tan(f2/f1))};
          if(concat == "SW") return {degrees:(Math.tan(f2/f1))};
          if(concat == "SE") return {degrees:(Math.tan(f2/f1))};
          if(concat == "EN") return {degrees:(Math.tan(f2/f1))};
          if(concat == "ES") return {degrees:(Math.tan(f2/f1))};
          if(concat == "WS") return {degrees:(Math.tan(f2/f1))};
          if(concat == "WN") return {degrees:(Math.tan(f2/f1))};
    }
    
     dotProduct(x1,x2,y1,y2){
        const format = "dotOne = (x1i + y1j) || dotTwo = (x2i + y2j)";
        console.log(format);
        console.log("----------Dot Product----------")
        const dot = (x1*y1)+(x2*y2);
        console.log(dot);
        return {dot}
    }
}


module.exports = Vector;