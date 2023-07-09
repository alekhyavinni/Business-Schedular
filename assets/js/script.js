
$(function() {
var today=new Date();
var timetags=document.querySelectorAll('.time')

//saveBtn click listeners
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
  


//render saved reminders from local storage 
$(".description").each(function(){
  var time=$(this).parent().attr('id');
  $(this).val(JSON.parse(localStorage.getItem(time)))
});

 
Timline();
}



);

