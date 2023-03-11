let btn = document.querySelector("#mainform");
let table = document.querySelector('.tbl');

/* data insert  */


btn.onsubmit = function (e) {
    e.preventDefault();
    let title = document.querySelector("#title").value.trim();
    let description = document.querySelector("#description").value;
    let date = new Date().toLocaleDateString();
    console.log(title, description, date);
    let data = { title: title, description: description, currentDate: date };
    let string = JSON.stringify(data);
    localStorage.setItem(title, string);

    let element = ` <tr class="td_tr">
    <td class="sr">${localStorage.length}</td>
    <td>${date}</td>
    <td>${title}</td>
    <td>${description}</td>
    <td><i class="fa fa-trash-o deleteicon"></i></td>
  </tr>`;

    table.innerHTML += element;
    delete_data();
}

let count;
let storage = localStorage;

for (count = 0; count < storage.length; count++) {
    let dataFetch = JSON.parse(localStorage.getItem(storage.key(count)));


    table.innerHTML += ` <tr class="td_tr">
    <td class="sr">${count + 1}</td>
    <td>${dataFetch.currentDate}</td>
    <td>${dataFetch.title}</td>
    <td>${dataFetch.description}</td>
    <td><i class="fa fa-trash-o deleteicon"></i></td>
  </tr>`;
}

/* delete function start  */

function delete_data(){
    let deleteIcon = document.querySelectorAll(".deleteicon");
deleteIcon.forEach((element) => {
    element.onclick = function () {
        let delTr = this.parentElement.parentElement;
        let titleName = delTr.querySelectorAll("td")[2].innerText.trim();
        let srTd = document.querySelectorAll(".sr")
        localStorage.removeItem(titleName);
        delTr.remove();
        let tr = document.querySelectorAll(".td_tr");
        let count = 1;
        tr.forEach((element,index)=>{
            element.querySelector(".sr").innerText=count++;
          

        })
        
       
    }
})

}

delete_data();

function del(){
    if(window.confirm("Are you sure ? All data will be Deleted !")){
        localStorage.clear();
        window.location.reload();
    }
}




