// let myName = "Brad"
// function amazingFunction() {
// let myName = "brad the third"
//     if (2 + 2 == 4) {
//     myName = "Brad the junior"
//     console.log(myName);
// }

// }
// amazingFunction();

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this);
        }
        imAFunctionNotAMethod()
        console.log(this.firstName + " " + this.lastName + " " + "is driving a car");
    }
}
john.driveCar()
function breathe() {
    console.log(this.firstName + " " + this.lastName + " " + "just inhale and exhale");
}
breathe.call(john)