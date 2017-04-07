// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//       console.log(h);
// 		if(h>12){
// 			h = h-12
// 		} else if(h == 0){
//       h = 12
//     }
//
//     var m = today.getMinutes();
//     m = checkTime(m);
//     document.getElementById('deviceTimer').innerHTML =
//     h + ":" + m
// 		document.getElementById('deviceTimer2').innerHTML =
//     h + ":" + m
//     var t = setTimeout(startTime, 30000);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }


$(document).on('click', '.skillsApp', function(e){
  e.preventDefault()
  console.log('hey');
  goToSectionByScroll('skills')
})

$(document).on('click', '.projectsApp', function(e){
  e.preventDefault()
  goToSectionByScroll('projects')
})

function goToSectionByScroll(id){
  $('body').animate({scrollTop: $('.'+id).offset().top}, 'slow')
}

$(document).on('mouseover', '.githubApp', function(){
 $(this).attr('src', $(this).data("hover"))
})

$(document).on('mouseout', '.githubApp', function(){
 $(this).attr('src', $(this).data("src"))
})
