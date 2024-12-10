 window.onload = function () {


   let result = document.getElementById("result");
   let btn = document.getElementById("search");
   let textsec = document.getElementById("field");
   let httpReq = new XMLHttpRequest();
   let link = 'superheroes.php';

  

   // function search() {

    btn.addEventListener('click', function(e) 
    {
          e.preventDefault();

          let ex = '?q=' + info;
          let info = textsec.value;
          httpReq.onreadystatechange = requestaction;
          httpReq.open('GET', link + ex, true);
          httpReq.send();
        }
        },

   function () {
     if (httpReq.readyState === XMLHttpRequest.DONE) {
       if (httpReq.status === 200) {

         let response = httpReq.responseText;
         result.innerHTML = response;

       } else {

         alert('There was a problem with that request');

       }
     }
   }
 }