
   document.querySelector("body").addEventListener("mousemove", tinyEyeball);
   function tinyEyeball() {
      var tinyEye = document.querySelectorAll(".tinyEye");
      tinyEye.forEach(function(tinyEye) {
         
         // EyeWidth & EyeHeight are variables, where EyeWidth stands for the
         // mouse's eyeWidth coordinate and EyeHeight for its height.
         let eyeWidth = tinyEye.getBoundingClientRect().left + tinyEye.clientWidth / 2;
         let eyeHeight = tinyEye.getBoundingClientRect().top + tinyEye.clientHeight / 2;
         let radian = Math.atan2(event.pageX - eyeWidth, event.pageY - eyeHeight);
         
         // Rotate is referred to as rot in a variable.
         let rot = radian * (190 / Math.PI) * -1 + 280;
         tinyEye.style.transform = "rotate(" + rot + "deg)";
      });
    }