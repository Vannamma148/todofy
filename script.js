   let input = document.querySelector("#userInput");

      function insert() {
        if (input.value == "") {
          alert("Please Enter Your Task!");
        } else {
          let li = document.createElement("li");
          li.innerHTML = `${input.value} <i class="fa-solid fa-trash" contentEditable = 'false'></i>`;

          let item = document.querySelector(".itemcontainer");

          item.append(li);
          // item.style.border = "1px solid white";
          // item.style.background= 'url("bg3.avif")';
          input.value = "";

        

          li.querySelector("i").addEventListener("click", () => {
            li.remove();
          });
         
        }
      }
     function del() {
        let itemContainer = document.querySelectorAll(".itemcontainer li");
        for(let items of itemContainer){
          items.innerHTML="";
        }
      input.value = "";
      
      }

      function edit() {
        const itemcontainer = document.querySelectorAll('.itemcontainer li ');
        itemcontainer.forEach((p) => {
            p.contentEditable = p.isContentEditable ? "false" : "true";

        });
        
    }
   

    // cursor
    let dot = document.querySelector('.dot');

    document.addEventListener('mousemove', (e) => {
        let { clientX, clientY } = e;
        dot.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
