//Make array of <input elements> and nodeList set a false value varuable
var nodesArray = [].slice.call(document.querySelectorAll("input"));
var bigArr = document.querySelectorAll('input');
var falsy = false;
//Add event listener to each item in array.
nodesArray.forEach(x => x.addEventListener('mousedown', function checkMulti(event) {
  
  var num = nodesArray.indexOf(x); //Return the clicked item index #
//Create Command key to check all boxes above slected item
  if(event.metaKey) {
    for(var i=num; i >= 0; i--) {
        x.checked = false;
        bigArr[i].checked = true;
    }
  }
//Create shift key to select items between each item selected.
  if(event.shiftKey){
    nodesArray.forEach(item => {
  //Find index of first item that is checked
      if(item.checked != falsy) { 
        var n = nodesArray.indexOf(item);
  //Compare item clicked to item already checked on list
        if(num < n){ //If item checked is below item clicked
          for(var i = num; i < n; i++){
            x.checked = false;//Makes new clicked item checked somehow?
            bigArr[i].checked = true;
        }
      }else{ //If item checked is above item clicked
        for(var i = num; i >= n; i--){
            x.checked = false;
            bigArr[i].checked = true;
      }
      }
      }
      
    })
        
      
    
        
    }
    }));




