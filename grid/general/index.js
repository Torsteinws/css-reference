
// ------------------------------- Grid 3 -------------------------
$(document).ready( () => {
    function reinitializeGrid(){
        // Removes all clases, and then reinitializes the grid.
        $("#grid3").removeClass();
        $("#grid3").addClass("initialize-grid");
        $("#grid3").addClass("initialize-grid-items");
    }

    function resetGrid() {
        // Checks whether the grid is big or small. This must be done before removing all clases. 
        var isGridFullSize = $("#grid3").hasClass("grid3-full-size");
        var isGridSmalSize = $("#grid3").hasClass("grid3-smal-size");

        reinitializeGrid();

        // Sets the grid size back to the size it had prior to removing all clases
        if(isGridFullSize){
            $("#grid3").addClass("grid3-full-size");
        }
        else if (isGridSmalSize) {
            $("#grid3").addClass("grid3-smal-size");
        }
    }

    $("#reset-to-big-grid-button").click( () => {
        reinitializeGrid();
        $("#grid3").addClass("grid3-full-size");
    });
    $("#reset-to-smal-grid-button").click( () => {
        reinitializeGrid();
        $("#grid3").addClass("grid3-smal-size");
    });
    
    $("#justify-content-start-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-start");
    })
    $("#justify-content-end-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-end");
    })
    $("#justify-content-center-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-center");
    })
    $("#justify-content-space-between-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-space-between");
    })
    $("#justify-content-space-around-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-space-around");
    })
    $("#justify-content-space-evenly-button").click( () => {
        resetGrid();
        $("#grid3").addClass("justify-content-space-evenly");
    })
})

// ---------------------------- Grid 4 ---------------------------
$(document).ready( () => {

    function resetGrid() {
        // Removes all clases, and then reinitializes the grid.
        $("#grid4").removeClass();
        $("#grid4").addClass("initialize-grid");
        $("#grid4").addClass("initialize-grid-items");
    }
    

    $("align-content-stretch-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-stretch");
    });
    $("#align-content-start-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-start");
    });
    $("#align-content-end-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-end");
    });
    $("#align-content-center-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-center");
    });
    $("#align-content-space-between-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-space-between");
    });
    $("#align-content-space-around-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-space-around");
    });
    $("#align-content-space-evenly-button").click( () => {
        resetGrid();
        $("#grid4").addClass("align-content-space-evenly");
    });
});

$(document).ready( () => {
    function resetGrid() {
        $("#grid5").removeClass();
        $("#grid5").addClass("initialize-grid");
        $("#grid5").addClass("initialize-grid-items");
    }

    $("#reset-grid5-button").click( () => {
        resetGrid();
    })

    $("#row-gap-50px-button").click( () => {
        resetGrid();
        $("#grid5").addClass("row-gap-height");
    })
    $("#column-gap-50px-button").click( () => {
        resetGrid();
        $("#grid5").addClass("column-gap-width");
    })
    $("#gap-10px-100px-button").click( () => {
        resetGrid()
        $("#grid5").addClass("gap-height-width");
    })
});

$(document).ready( () => {
    function resetGrid (){
        $("#grid6 div").removeClass()
    }

    $("#reset-grid6-button").click( () => {
        resetGrid();
    });
    $("#box-9-grid-row-1-button").click( () => {
        resetGrid();
        $("#grid6-item9").addClass("grid-row-postion-1");
    });
    $("#box-9-grid-column-1-button").click( () => {
        resetGrid();
        $("#grid6-item9").addClass("grid-column-position-1");
    });
    $("#box-1-grid-row-1-3-button").click( () => {
        resetGrid();
        $("#grid6-item1").addClass("grid-row-1-3");
    });
    $("#box-1-grid-column-1-3-button").click( () => {
        resetGrid();
        $("#grid6-item1").addClass("grid-column-1-3");
    });
    $("#box-1-grid-row-1-span-3-button").click( () => {
        resetGrid();
        $("#grid6-item1").addClass("grid-row-1-span-3");
    });
    $("#box-1-grid-column-1-span-3-button").click( () => {
        resetGrid();
        $("#grid6-item1").addClass("grid-column-1-span-3");
    });
})

