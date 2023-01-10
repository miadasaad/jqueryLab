
$(function(){

    $( ".add" ).click(function() {

    
        // variables
        let myList = $("<div></div>");
        let paragraph = $("<p></p>");
        let doneButton = $("<button></button>");
        let deleteButton = $("<button></button>");

        //appending elements in div (lists)
        myList.addClass("list")
        paragraph.text($( "input" ).val()) ;
        myList.append(paragraph);

        doneButton.text("Done");
        myList.append(doneButton);

        deleteButton.text("Delete");
        myList.append(deleteButton);

        $('.lists').append(myList);

        //events on done and delete
        $(doneButton).click(function() {
            $(paragraph).css("backgroundColor","gray");
            
          }) 
        $(deleteButton).click(function() {
            $(myList).remove();
          }) 



      });


})