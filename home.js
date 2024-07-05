const shopping = [];
function addItem(){
    let item = document.getElementById('added').value;//getting the values of the item in the element once the add button has been clicked
    shopping.push(item);// adding the item to the array
    let newItem = document.createElement('li');//create a list to 'store' the added
    newItem.className = "added";//create the class name(looping?)
    newItem.innerText = item;//writing the item added to the list element
    let list = document.getElementById('list').appendChild(newItem);//adding the list to the unordered list
    list.append()//adding the list to the DOM tree
    document.getElementsByClassName('added').value = '';//trying to display the items on the webpage

}
function clearItem(){
    let clear = document.getElementsByClassName('added');
    clear.remove()//clear the displayed items
    shopping = [];//clear the array
}
function purchasedItem(){
    let item = document.getElementsByClassName('added').value;//getting the value in teh shopping list
    if(shopping.includes(item)){
        item.style.text-decoration ;'line-through';//strike-through the items purchased,if its on the list
    }
    //else{
        //alert('Item not found in the list');
    //}
}


document.addEventListener('submit',addItem)
document.addEventListener('click',purchasedItem)
document.addEventListener('click',clearItem)
//console.log(shopping)

