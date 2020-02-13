// ---------------- Flexbox 1 ----------------
$(document).ready( () => {
    // Resets the layout of the flexbox
    // Since js is asyncronous there is a chance that this event will fire after the other click events.
    // This is therefore an unsafe way to reset the buttons. However, we'll do it here anyway just to save lines of code
    $("#button-container1 button").click( () => {
        $("#box-container1").removeClass();                     // Removes all clases
        $("#box-container1").addClass("initialize-boxes");      // Reinitalize the boxes
        $("#box-container1").addClass("initialize-container")   // Reinitializes the flexbox container
    })

    $("#flexRowButton").click( () => {
        $("#box-container1").addClass("flex-direction-row");
    });
    $("#flexRowReverseButton").click( () => {
        $("#box-container1").addClass("flex-direction-row-reverse");
    })
    $("#flexColumnButton").click( () => {
        $("#box-container1").addClass("flex-direction-column");
    });
    $("#flexColumnReverseButton").click( () => {
        $("#box-container1").addClass("flex-direction-column-reverse");
    });
});

// ----------------- Flexbox 2 -----------------------
$(document).ready( () => {
    $("#button-container2 button").click( () => {
        $("#box-container2").removeClass();
        $("#box-container2").addClass("initialize-boxes");
        $("#box-container2").addClass("initialize-container");
    });
    
    $("#justifyContentFlexStartButton").click( () => {
        $("#box-container2").addClass("justify-content-flex-start");
    })
    $("#justifyContentFlexEndButton").click( () => {
        $("#box-container2").addClass("justify-content-flex-end");
    })
    $("#justifyContentCenterButton").click( () => {
        $("#box-container2").addClass("justify-content-center");
    }) 
    $("#justifyContentSpaceAroundButton").click( () => {
        $("#box-container2").addClass("justify-content-space-around");
    })
    $("#justifyContentSpaceBetweenButton").click( () => {
        $("#box-container2").addClass("justify-content-space-between");
    })
    $("#justifyContentSpaceEvenlyButton").click( () => {
        $("#box-container2").addClass("justify-content-space-evenly");
    })
})

// ------------------------------ Flexbox 3 -----------------------------------
$(document).ready( () => {
    $("#button-container3 button").click( () => {
        $("#box-container3").removeClass();
        $("#box-container3").addClass("initialize-boxes");
        $("#box-container3").addClass("initialize-container");
    });

    $("#flexNoWrapButton").click( () => {
        $("#box-container3").addClass("flex-wrap-nowrap");
    });
    $("#flexWrapButton").click( () => {
        $("#box-container3").addClass("flex-wrap-wrap");
    });
    $("#flexWrapReverseButton").click( () => {
        $("#box-container3").addClass("flex-wrap-wrap-reverse");
    });
})

// --------------------------- Flexbox4 --------------------------
$(document).ready( () => {
    $("#button-container4 button").click( () => {
        $("#box-container4").removeClass();
        $("#box-container4").addClass("initialize-boxes");
        $("#box-container4").addClass("initialize-container");
    });

    $("#alignItemsStretchButton").click( () => {
        $("#box-container4").addClass("align-items-stretch");
    });
    $("#alignItemsFlexStartButton").click( () => {
        $("#box-container4").addClass("align-items-flex-start");
    });
    $("#alignItemsFlexEndButton").click( () => {
        $("#box-container4").addClass("align-items-flex-end");
    })
    $("#alignItemsCenterButton").click( () => {
        $("#box-container4").addClass("align-items-center");
    })
})

$(document).ready( () => {
    // Because js is asyncronous, the safest way to avoid race condition is to make
    // the reset logic as a function, and then call the function from every button click event.
    function resetFlexbox(){
        $("#child-flexbox1").removeClass();
        $("#child-flexbox1").addClass("initialize-boxes");
        $("#child-flexbox1").addClass("initialize-child-flexbox");
        
        $("#child-flexbox2").removeClass();
        $("#child-flexbox2").addClass("initialize-boxes");
        $("#child-flexbox2").addClass("initialize-child-flexbox");  
    };

    $("#stretchButton").click( () => {
        resetFlexbox();
        $("#child-flexbox1").addClass("align-items-stretch");
        $("#child-flexbox2").addClass("align-content-stretch");
    });
    $("#flexStartButton").click( () => {
        resetFlexbox();
        $("#child-flexbox1").addClass("align-items-flex-start");
        $("#child-flexbox2").addClass("align-content-flex-start");
    });
    $("#flexEndButton").click( () => {
        resetFlexbox();
        $("#child-flexbox1").addClass("align-items-flex-end");
        $("#child-flexbox2").addClass("align-content-flex-end")
    });
    $("#centerButton").click( () => {
        resetFlexbox();
        $("#child-flexbox1").addClass("align-items-center");
        $("#child-flexbox2").addClass("align-content-center");
    }) 
});

$(document).ready( () => {
    function resetFlexbox() {
        $("#box-container6").removeClass();
        $("#box-container6").addClass("initialize-boxes");
        $("#box-container6").addClass("initialize-container");
    };

    $("#alignContentStretchButton").click( () => {
        resetFlexbox();
        $("#box-container6").addClass("align-content-stretch");
    })
    $("#alignContentSpaceAroundButton").click( () => {
        resetFlexbox();
        $("#box-container6").addClass("align-content-space-around");
    })
    $("#alignContentSpaceBetweenButton").click( () => {
        resetFlexbox();
        $("#box-container6").addClass("align-content-space-between");
    })

});