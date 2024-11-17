let count = 0
        document.getElementById("addItem").addEventListener('click', function () {
            if(document.getElementsByTagName("input")[0].value == ""){
                return;
            }


            let child = document.createElement("div");
            child.id = count;
            count++;
            let text = document.createElement("span");
            let textNode = document.createTextNode(document.getElementsByTagName("input")[0].value);
            text.append(textNode);

            
            let button1 = document.createElement("button")
            button1.textContent = "correct";
            button1.addEventListener('click', function () {
                this.parentNode.children[3].style.display = 'none'
                this.parentNode.children[2].style.display = 'none'
                this.parentNode.children[1].style.display = 'none'
                this.parentNode.children[0].style.textDecoration = "line-through";
            })

            let button2 = document.createElement("button")
            button2.textContent = "edit";
            button2.addEventListener('click', function () {
                
                let inp = document.createElement('input');
                inp.value = this.parentNode.children[0].textContent
                let old = this.parentNode.children[0];
                this.parentNode.replaceChild(inp, old);
                this.parentNode.children[3].style.display = "none";
                this.parentNode.children[2].style.display = "none";
                this.parentNode.children[1].style.display = "none";


                let button4 = document.createElement("button");
                button4.textContent = "Save";
                this.parentNode.append(button4);
                button4.addEventListener("click", function () {
                    this.parentNode.children[3].style.display = "inline";
                    this.parentNode.children[2].style.display = "inline";
                    this.parentNode.children[1].style.display = "inline";
                    let textSpan = document.createElement("span");
                    textSpan.textContent =  this.parentNode.children[0].value;
                    this.parentNode.replaceChild(textSpan,this.parentNode.children[0]);
                    this.parentNode.removeChild(this);
                })
                    

            })

            let button3 = document.createElement("button")
            button3.textContent = "delete";
            button3.addEventListener('click', function () {
                document.getElementById("container").removeChild(this.parentNode);
            })

            child.append(text);
            child.append(button1);
            child.append(button2);
            child.append(button3)
            document.getElementById('container').appendChild(child);
            document.getElementsByTagName("input")[0].value = ""
        })

        document.getElementById("clear-all").addEventListener('click',function (){
            document.getElementById("container").innerHTML = ""
        })