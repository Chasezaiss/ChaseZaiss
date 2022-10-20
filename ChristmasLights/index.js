$(".clickable").click(function () {
    var colors = ["Red", "Blue", "Green", "White"];
    var classes = this.classList[3];
    var n = 0;
    switch (i = this.classList[3]) {
        case i = "glowRed":
            n = 1;

            break;
        case i = "glowBlue":
            n = 2;
            break;
        case i = "glowGreen":
            n = 3;
            break;
        case i = "glowWhite":
            n = 0;
            break;
        default: console.log("issue");
    }
    var glowColor = "glow" + colors[n];
    this.classList.remove(classes);
    this.classList.add(glowColor);
})









/*var randomNumber =  Math.floor(4 * Math.random());
   
   
   */