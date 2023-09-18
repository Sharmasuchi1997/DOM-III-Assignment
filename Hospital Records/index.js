let hospitalForm= document.querySelector('form')

hospitalForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("submit")
    let name= document.getElementById('name').value;
    let doctorID=document.getElementById('docId').value;
    let department= document.getElementById('dept').value;
    let experience= document.getElementById('exp').value;
    let emailAdd= document.getElementById('email').value;
    let mobileNo= document.getElementById('mbl').value;


    let role;
    if(experience > 5)
    {
        role="Senior";
    }
    else if(experience >= 2 && experience <=5)
    {
        role="Junior"
    }
    else if(experience <= 1)
    {
        role="Trainee"
    }

    let tbody= document.querySelector('tbody')
    let row= document.createElement('tr')

 let data=[name, doctorID, department, experience, emailID, mobileNo, role ]

    data.forEach((ele)=>{
        // tbody.appendChild(data)
        let td=document.createElement('td')
        td.innerText=ele
        row.appendChild(td)

    })
    let deleteTd= document.createElement('td')
    let deleteButton= document.createElement('button')
    deleteButton.innerText= "Delete"
    console.log(deleteButton)

    deleteButton.addEventListener('click', function(){
       tbody.removeChild(row)
    })

  deleteTd.appendChild(deleteButton)
  row.appendChild(deleteTd)

  tbody.appendChild(row)

})