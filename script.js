window.addEventListener('load',function(){
    const canvas=document.getElementById('canvas')
 
 
    
   
    const ctx=canvas.getContext('2d')
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
  var painting=false;
  function startPosition(e){
      painting=true;
      draw(e)
   }
  function finishPosition(){
    painting=false;
    ctx.beginPath()
    }
   function draw(e){
       if(painting==false){return;}
       ctx.lineCap="round";
       ctx.strokeStyle=document.getElementById('color').value ;
       ctx.lineWidth=document.getElementById('thick').value;
       //console.log(document.getElementById('color').value)
       //console.log(document.getElementById('thick').value)

       ctx.lineTo(e.clientX,e.clientY)
       ctx.stroke( )
       ctx.beginPath( )
       ctx.moveTo(e.clientX,e.clientY)




   }
   canvas.addEventListener('mousedown',startPosition)
   canvas.addEventListener('mouseup',finishPosition)
   canvas.addEventListener('mousemove',draw)
   

   

})