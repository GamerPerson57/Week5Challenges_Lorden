export class Light {

    isLightOn = false;

    switchOn() {
        if(this.isLightOn) {
            console.log("Light is already on.")
        } else {
            this.isLightOn = true;
            console.log("On");
        }
    }

    switchOff() {
        if(this.isLightOn) {
            console.log("Light is already off.")
        } else {
            this.isLightOn = false;
            console.log("Off");
        }
    }
}