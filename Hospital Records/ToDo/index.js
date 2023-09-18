let toDoForm= document.querySelector('form')
let taskId= document.getElementById('task')
let priorityId= document.getElementById('priority')
let tbody=document.querySelector('tbody')




let allData=[]
toDoForm.addEventListener('submit', function(e){
        e.preventDefault()
        // console.log("submit")
        let data=
        {
                input: taskId.value,
                priorityInp: priorityId.value
        }
        allData.push(data)
        console.log(allData)
        tbody.innerHTML=""
        allData.map((ele)=>{
                let row= document.createElement('tr')
                let td1= document.createElement('td')
                let td2= document.createElement('td')
                td1.innerText= ele.input;
                td2.innerText= ele.priorityInp;

                row.append(td1, td2)
                tbody.append(row)

        })
               

})