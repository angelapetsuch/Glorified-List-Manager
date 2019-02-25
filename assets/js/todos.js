var lists = [];
$( document ).ready(function() {

    $("#listBox").hide();
    // on load we want to fill the dropdown with the users 
    // saved lists
    });


// check off specific to do's by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on "X" to delete to do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); // stop event bubbling
});

// create new To Dos
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var listBoxText = $(this).val();
		$(this).val("");
		document.createElement("ul");
		// create a new li with new to do
		$("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span> " + listBoxText + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

$("#list").change(function() {
	var chosenList = $(this).val();
	console.log(chosenList);

	if (chosenList == "none") {
		$("p").remove();
		$("#newName").remove();
		$("#save").removeClass("saved")
		$("#save").remove();
		$("#newListName").hide();
		$("#listBox").hide();
	}
	if (chosenList == 0) {
		$("#listBox").hide();
		$("#newListName").append("<input type='text' id='newName' placeholder='name your new list'><button type='submit' id='save'>Save</button>");
		$("#newListName").show();
	} else {
		$("#newName").remove();
		$("#save").remove();
	}
	if (chosenList == 1) {
		$("p").remove();
		$("#listBox").show();
	} 
});

$("#newListName").on("click", "#save", function() {
	console.log("saved!");
	var name = $("#newName").val();
	lists.push(name);
	$("#save").addClass("saved");
	$("#save").prop('disabled', true);
	$("#save").text("Saved!");
	$("#newListName").append("<p class='saved-text'>" + name + " has been saved! Now listify that list!" + "</p>");
	$("#list").append("<option>" + name + "</option>");
	// pop up new list template
	createList(name);
});

function createList(name) {
	// build out the new list in an html string
	var innerHTML = "<h1>" + name + "<span id='toggle-form'><i class='fa fa-edit'></i></span></h1>" +
		"<input type='text' name='" + name + "' placeholder='Add your new list item here!'>";

	$("#listBox").append(innerHTML);
	$("#listBox").show();
}
