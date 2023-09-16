let myForm= document.querySelector('form')


myForm.addEventListener('submit', function(e){
    e.preventDefault()

    let name= document.getElementById('name').value;
    let employeeID= document.getElementById('employeeID').value;
    let department= document.getElementById('department').value;
    let experience= document.getElementById('exp').value;
    let emailID= document.getElementById('email').value;
    let mobile= document.getElementById("mbl").value;


    let role;
    if(experience > 5)
    {
        role="Senior";
    }
    else if(experience >= 2 && experience <= 5)
    {
        role="Junior";
    }
    else if( experience <= 1)
    {
        role="Fresher"
    }

    let tbody= document.querySelector('tbody')
    let row=document.createElement('tr')

    let data=[name, employeeID, department, experience, emailID, mobile, role]

    data.forEach((ele)=>{
        let td= document.createElement('td')
        td.innerText=ele
        row.appendChild(td)
    })

        let deleteTd= document.createElement('td')
        let deleteButton= document.createElement('button')
        deleteButton.innerText="Delete"

        deleteButton.addEventListener('click', function(){
            tbody.removeChild(row)

        })

        deleteTd.append(deleteButton)
        row.append(deleteTd)





     tbody.appendChild(row)

    })