window.onload=function(){
   let game= new Game();
   game.screen=document.querySelector(".screen");
   let num=6;
   for(let i=1;i<=num;i++){
	 game.createletter();

	}
	 let key=document.querySelector("footer .keybox");
	 console.log(key)
     key.onclick=function(event){
     	console.log(event.target)
     	if(event.target.className!="keybox"){
         let text=event.target.innerText
         console.log(text);
         game.remove(text,1);
     	}
     }
     // 暂停和开始
   let switch1=document.querySelector("#switch");
   let state=false;
   switch1.onclick=function(){
   	 if(state){
   	 	game.stop();
      key.onclick=function(){
          return;
        }
   	 	state=false;
   	 	switch1.className="stop";
       }else{
       	game.run();
       	switch1.className="start";
       	state=true;
       }
   }
  //重新开始
  let repeatStart=document.querySelector(".repeatStart") ;
  repeatStart.onclick=function(){
  	game.repeatStart();
  	 
  }
          
         
    
    
    



}