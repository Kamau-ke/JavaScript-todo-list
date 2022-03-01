var form=document.getElementById('addForm');

var itemList=document.querySelector('#items');

var filter=document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

// form submit event

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem)

function addItem(e){
e.preventDefault();
    // get input value

var newItem=document.getElementById('formInput').value;

// create new li element
var li=document.createElement('li');

// add class
li.className='list-group-item';

// add text node with input value
li.appendChild(document.createTextNode(newItem));

//create delete button

var deleteBtn=document.createElement('button');

//add classes to btn

deleteBtn.className='btn btn-danger btn-sm float-right delete';

//append text node

deleteBtn.appendChild(document.createTextNode('X'));

// append button to list

li.appendChild(deleteBtn);

//append to list

itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItems(e){
    // convert to lowerCase

    var text=e.target.value.toLowerCase(); 
    console.log(text)

    // get li
    var items = itemList.getElementsByTagName('li');

    //convert to an array

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block'
        }else{
            item.style.display='none';
        }
    })


}


