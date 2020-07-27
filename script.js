function colorHandler(self, color){
    var text = document.getElementById("yearText");
    var box = document.getElementById("colorBox");
    var value = self.value;

    text.innerHTML = "Color of the Year " + value + " (" + color + ") ";
    box.style.backgroundColor = color;
}