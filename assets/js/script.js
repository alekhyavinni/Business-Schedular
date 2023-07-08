
$(function() {
var today=new Date();
var timetags=document.querySelectorAll('.time')
var saveBtn=document.querySelectorAll('.saveBtn')



$(".saveBtn").on('click',function(event){
  event.preventDefault();
  var time=$(this).parent().attr('id');
  var remindertext=$(this).siblings('.description').val();
  localStorage.setItem(time,JSON.stringify(remindertext))

})
  
function Timline(){

//today's Date using dayjs()
$('#currentDay').text(dayjs().format('MMM D,YYYY'));

//  9 am bussiness hour
if(timetags[0].textContent<today.getHours()){
  $('#hour-9').addClass('past')
  }
  else if(timetags[0].textContent>today.getHours()){
    $('#hour-9').addClass('future')
  }
  else if(timetags[0].textContent==today.getHours()){
    $('#hour-9').addClass('present')
  }

// 10 am bussiness hour
if(timetags[1].textContent<today.getHours()){
  $('#hour-10').addClass('past')
  }
else if(timetags[1].textContent>today.getHours()){
  $('#hour-10').addClass('future')
  }
else if(timetags[1].textContent==today.getHours()){
  $('#hour-10').addClass('present')
  }

//  11 am bussiness hour
if(timetags[2].textContent<today.getHours()){
  $('#hour-11').addClass('past')
  }
else if(timetags[2].textContent>today.getHours()){
  $('#hour-11').addClass('future')
  }
else if(timetags[2].textContent==today.getHours()){
  $('#hour-11').addClass('present')
  }

//  12 pm bussiness hour
  if(timetags[3].textContent<today.getHours()){
    $('#hour-12').addClass('past')
    }
  else if(timetags[3].textContent>today.getHours()){
    $('#hour-12').addClass('future')
    }
  else if(timetags[3].textContent==today.getHours()){
    $('#hour-12').addClass('present')
    }

 //  1 pm bussiness hour
  if(timetags[4].textContent<today.getHours()){
    $('#hour-1').addClass('past')
    }
  else if(timetags[4].textContent>today.getHours()){
    $('#hour-1').addClass('future')
    }
  else if(timetags[4].textContent==today.getHours()){
    $('#hour-1').addClass('present')
    }

 //  2 pm bussiness hour
  if(timetags[5].textContent<today.getHours()){
    $('#hour-2').addClass('past')
    }
  else if(timetags[5].textContent>today.getHours()){
    $('#hour-2').addClass('future')
    }
  else if(timetags[5].textContent==today.getHours()){
    $('#hour-2').addClass('present')
    }
  
 //  3 pm bussiness hour
  if(timetags[6].textContent<today.getHours()){
    $('#hour-3').addClass('past')
    }
  else if(timetags[6].textContent>today.getHours()){
    $('#hour-3').addClass('future')
    }
  else if(timetags[6].textContent==today.getHours()){
    $('#hour-3').addClass('present')
    }

//  4 pm bussiness hour
  if(timetags[7].textContent<today.getHours()){
    $('#hour-4').addClass('past')
    }
  else if(timetags[7].textContent>today.getHours()){
    $('#hour-4').addClass('future')
    }
  else if(timetags[7].textContent==today.getHours()){
    $('#hour-4').addClass('present')
    }

  //  5 pm bussiness hour
  if(timetags[8].textContent<today.getHours()){
    $('#hour-5').addClass('past')
    }
  else if(timetags[8].textContent>today.getHours()){
    $('#hour-5').addClass('future')
    }
  else if(timetags[8].textContent==today.getHours()){
    $('#hour-5').addClass('present')
    }
}
  
  
$("#hour-9.description").val(JSON.parse(localStorage.getItem('hour-9')));
$("#hour-10.description").val(JSON.parse(localStorage.getItem('hour-10')));
$("#hour-11.description").val(JSON.parse(localStorage.getItem('hour-11')))
$("#hour-12.description").val(JSON.parse(localStorage.getItem('hour-12')))
$("#hour-1.description").val(JSON.parse(localStorage.getItem('hour-1')))
$("#hour-2.description").val(JSON.parse(localStorage.getItem('hour-2')))
$("#hour-3.description").val(JSON.parse(localStorage.getItem('hour-3')))
$("#hour-4.description").val(JSON.parse(localStorage.getItem('hour-4')))
$("#hour-5.description").val(JSON.parse(localStorage.getItem('hour-5')))

 
Timline();
}



);




 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // to display the current date in the header of the page.