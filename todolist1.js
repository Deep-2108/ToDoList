const todoList=[];
const inpt=document.querySelector('.inpt');
const dat=document.querySelector('.date');
const btn=document.querySelector('button');
const display=document.querySelector('.para');
btn.addEventListener('click',()=>{
    const val=inpt.value;
    const date=dat.value;
    if(val==null||val=='')alert("please task enter to kr do");
    else { todoList.push(
    {name:val,
        DueDate:date,
    }
   );
   renderData();
    inpt.value="";
    dat.value='';
}
})
const renderData=()=>{
    let html='';
    for(let i=0;i<todoList.length;i++){
        const addhtml=`
        <div class="deleteClass">
       <div> ${todoList[i].name}</div>
       <div> ${todoList[i].DueDate}</div>
        <button class="deleteBtn" onclick="
        todoList.splice(${i},1);
        renderData();
        ">Delete</button>
        </div>
        `;
        html+=addhtml;
    }
    display.innerHTML=html;
}
