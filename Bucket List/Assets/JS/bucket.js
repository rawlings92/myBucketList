//check off clicked activities
$("ul").on("click", "li" , function(){
 $(this).toggleClass("completedActivity");
});
//click on X to delete an Activity
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});

$("input[type ='text'").keypress(function(event){
if(event.which===13){
 //grabbing new Activity  from input
var activityText= $(this).val();
//clear input after adding New Activity to UL
$(this).val("");
//create a new Li and add to UL 
$("ul").append("<li> <span>X</span> " + activityText + "</li>" );

}
});

$(".fa").click(function(){
	$("ul").fadeToggle();
});
	

