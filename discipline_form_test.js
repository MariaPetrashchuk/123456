$(document).ready(function() {
    $("#addDisciplineForm").submit(function(event) {
        event.preventDefault();
        $.post("/manage_disciplines", {
            Discipline_Name: $("#disciplineName").val()
        }, function() {
            $("#addMessage").text("Discipline added successfully!");
        }).fail(function() {
            $("#addMessage").text("Failed to add discipline.").css("color", "red");
        });
    });

    $("#updateDisciplineForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_disciplines",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                id: $("#updateId").val(),
                Discipline_Name: $("#updateDisciplineName").val()
            }),
            success: function() {
                $("#updateMessage").text("Discipline updated successfully!");
            },
            error: function() {
                $("#updateMessage").text("Failed to update discipline.").css("color", "red");
            }
        });
    });

    $("#deleteDisciplineForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_disciplines",
            type: "DELETE",
            contentType: "application/json",
            data: JSON.stringify({ id: $("#deleteId").val() }),
            success: function() {
                $("#deleteMessage").text("Discipline deleted successfully!");
            },
            error: function() {
                $("#deleteMessage").text("Failed to delete discipline.").css("color", "red");
            }
        });
    });
});