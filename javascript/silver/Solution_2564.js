//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const implement = (input) => {
    let square = input.shift().split(' ');
    square = square.map(x=>parseInt(x));
    const shopNum = input.shift();
    const shops = input.map(x=>x.split(' '));
    let security = shops.pop();
    security = security.map(x=>parseInt(x));

    const horizon = security[0]===1 || security[0]===2?true:false;
    const top = security[1]
    const bottom = horizon?square[0]-security[1]:square[1]-security[1];
    let result = 0;
    for(i of shops){
        const shop = i.map(x=>parseInt(x));
        const shopHorizon = shop[0]===1 || shop[0]===2?true:false;
        const shopTop = shop[1];
        const shopBottom = shopHorizon?square[0]-shop[1]:square[1]-shop[1];

        if(shop[0] === security[0]) result += shop[1]-security[1] >= 0
                                    ?shop[1]-security[1]
                                    :-(shop[1]-security[1]);
        else if((horizon && shopHorizon) || (!horizon && !shopHorizon)){
            const temp1 = top+shopTop <= bottom+shopBottom?top+shopTop:bottom+shopBottom;
            const temp2 = horizon?square[1]:square[0];
            result += temp1+temp2;
        }
        else{
            if(security[0] === 1 || security[0] === 3){
                if(shop[0] === 1 || shop[0] === 3) result += top+shopTop;
                else result += bottom+shopTop;
            }
            else{
                if(shop[0] === 2 || shop[0] === 4) result += bottom+shopBottom;
                else result += top+shopBottom;
            }
        }
    }
    console.log(result);
}
implement(input);