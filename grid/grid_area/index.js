$(document).ready( () => {
    function resetGrid() {
        $("#grid1-item1").removeClass();
    }

    $("#reset-grid1-button").click(resetGrid);

    $("#grid-area-1-1-3-3-button").click( () => {
        resetGrid();
        $("#grid1-item1").addClass("grid-area-1-1-3-3");
    });

    $("#grid-area-1-1-span-3-span-3-button").click( () => {
        resetGrid();
        $("#grid1-item1").addClass("grid-area-1-1-span-3-span-3");
    });
});


$(document).ready( () => {
    function resetGrid() {
        $("#grid2").removeClass();
        $("#grid2").addClass("initialize-grid");
        $("#grid2").addClass("initialize-grid-items");
    }

    $("#reset-grid2-button").click(resetGrid);

    $("#grid2-button1").click( () => {
        resetGrid();
        $("#grid2").addClass("grid-template-areas1");
    });
    $("#grid2-button2").click( () => {
        resetGrid();
        $("#grid2").addClass("grid-template-areas2");
    });
    $("#grid2-button3").click( () => {
        resetGrid();
        $("#grid2").addClass("grid-template-areas3");
    });
    $("#grid2-button4").click( () => {
        resetGrid();
        $("#grid2").addClass("grid-template-areas4");
    });
});
