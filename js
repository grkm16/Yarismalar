<canvas id="canvas" width="500" height="500" style="border:1px solid"></canvas>


do{

 var deger = parseInt(window.prompt("Yarı çapı giriniz")); 
CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation){
   var numRadsPerLetter = 2*Math.PI / text.length;
   this.save();
   this.translate(x,y);
   this.rotate(startRotation);

   for(var i=0;i<text.length;i++){
      this.save();
      this.rotate(i*numRadsPerLetter);
      this.fillText(text[i],0,-radius);
      this.restore();
   }
   this.restore();
}
var eb=document.getElementById('canvas');
var ctx = eb.getContext('2d');
ctx.beginPath();
ctx.font = "bold 30px Serif";
ctx.fillTextCircle("******************************",250,250,deger,0,Math.PI / 2);
ctx.fillText("Σ",eb.width/2-15,eb.height/2);     
ctx.stroke();


}
while(isNaN(deger) || deger < 1 || deger > 250 );
  

https://codepen.io/necessary/pen/MvbPQb
