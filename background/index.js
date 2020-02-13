$(document).ready( () => {
    function removeClasses(ClassArray) {
        $.each(ClassArray, (index, value) => {
            $("#background-container").removeClass(value);
        })
    }

    // Background size buttons
    $("#reset-size-button").click( () => {
        removeClasses([
            "background-size-auto",
            "background-size-contain",
            "background-size-cover",
            "background-size-200-200"
        ]);
    });
    $("#background-size-auto-button").click( () => {
        $("#background-container").addClass("background-size-auto");
    });
    $("#background-size-contain-button").click( () => {
        $("#background-container").addClass("background-size-contain");
    });
    $("#background-size-cover-button").click( () => {
        $("#background-container").addClass("background-size-cover");
    });
    $("#background-size-200-200-button").click( () => {
        $("#background-container").addClass("background-size-200-200");
    }); 

    // Background-repeat buttons
    $("#reset-repeat-button").click( () => {
        removeClasses([
            "background-no-repeat", 
            "background-repeat",
            "background-repeat-x",
            "background-repeat-y"
        ]);
    });

    $("#background-no-repeat-button").click( () => {
        $("#background-container").addClass("background-no-repeat");
    });
    $("#background-repeat-button").click( () => {
        $("#background-container").addClass("background-repeat");
    });
    $("#background-repeat-x-button").click( () => {
        $("#background-container").addClass("background-repeat-x");
    });
    $("#background-repeat-y-button").click( () => {
        $("#background-container").addClass("background-repeat-y");
    });


    // Background-position buttons
    $("#reset-position-button").click( () => {
        removeClasses([
            "background-position-center",
            "background-position-left",
            "background-position-right",
            "background-position-top",
            "background-position-bottom"
        ]);
    });

    $("#background-position-center-button").click( () => {
        $("#background-container").addClass("background-position-center");
    });
    $("#background-position-left-button").click( () => {
        $("#background-container").addClass("background-position-left");
    });
    $("#background-position-right-button").click( () => {
        $("#background-container").addClass("background-position-right");
    });
    $("#background-position-top-button").click( () => {
        $("#background-container").addClass("background-position-top");
    });
    $("#background-position-bottom-button").click( () => {
        $("#background-container").addClass("background-position-bottom");
    });

    // Background attachment buttons
    $("#reset-attachment-button").click( () => {
        removeClasses([
            "background-attachment-scroll",
            "background-attachment-fixed"
        ]);
    });

    $("#background-attachment-scroll-button").click( () => {
        $("#background-container").addClass("background-attachment-scroll");
    });
    $("#background-attachment-fixed-button").click( () => {
        $("#background-container").addClass("background-attachment-fixed");
    });
});