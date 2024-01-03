(function(){
  "use strict";

  var tabs=document.querySelectorAll("#tabs >ul >li>a");

  /* for (let i=0;i<tabs.length;i++){
      tabs[i].addEventListener("click",selectTab)
  } */

  tabs.forEach(tab => {
    tab.addEventListener("click",selectTab);
  })
  
  function selectTab(event){
      event.preventDefault();
      /* for (let i=0;i<tabs.length;i++){
          tabs[i].removeAttribute("class");
      } */
      tabs.forEach(tab => {
        tab.removeAttribute("class");
      })

      event.target.className = "active";
  
      const thisTab=event.target.getAttribute("href");
      const thisContent=document.querySelector(thisTab);
      console.log(thisContent);
  
      const oldContent=document.querySelector(".visible");
      console.log(oldContent);
      oldContent.className="visuallyhidden";
      oldContent.addEventListener("transitionend",function(){  // transitionend at the end of last action it will allow the function to perform
       oldContent.className="hidden";
       thisContent.className="visible visuallyhidden"; // visually hidden for transition effect
       setTimeout(function(){
          thisContent.classList.remove("visuallyhidden")
       },20)
      } , {capture:false , once:true , passive:false}); // this three setting will help us to avoid the flickering effect
  }

})();


