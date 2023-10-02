function checkFirstHit(){
let hitDamage = ["Head Chop", "HeadKick", "MidChop", "MidKick", "LowChop", "LowKick"];

let firstHit = {
    HeadChop : 2500, 
    HeadKick : 9250,
    MidChop : 1500, 
    MidKick : 8550, 
    LowChop : 975, 
    LowKick : 1250,
};

let hitCheck = "HeadKick";
let isFirstHit = false;

for (let i = 0; i < hitDamage.length; i++) {
    if (hitDamage[i] === hitCheck) {
        isFirstHit = true;
       break;
    }
}

if (isFirstHit)
{console.log("Damage Blows: ");
    for (let i = 0; i < hitDamage.length; i++) {
      console.log(hitDamage[i]);
    }
let bam = firstHit[hitCheck];
console.log('WHACK! ' +  (hitCheck) +"!" + " " + (bam) + "!" + ' Ouch!!');
console.log("Critical Blow!")
} else {
    console.log('AHAHAAHAA, You Missed!');
    console.log("Try Again!")
}

}

checkFirstHit()
