$(document).ready(function() {
    $("#addGradeForm").submit(function(event) {
        event.preventDefault();
        $.post("/manage_grades", {
            Student_ID: $("#studentId").val(),
            Discipline_ID: $("#disciplineId").val(),
            Grade_Value: $("#gradeValue").val()
        }, function() {
            $("#addMessage").text("Grade added successfully!");
        }).fail(function() {
            $("#addMessage").text("Failed to add grade.").css("color", "red");
        });
    });

    $("#updateGradeForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_grades",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                id: $("#updateId").val(),
                Student_ID: $("#updateStudentId").val(),
                Discipline_ID: $("#updateDisciplineId").val(),
                Grade_Value: $("#updateGradeValue").val()
            }),
            success: function() {
                $("#updateMessage").text("Grade updated successfully!");
            },
            error: function() {
                $("#updateMessage").text("Failed to update grade.").css("color", "red");
            }
        });
    });

    $("#deleteGradeForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_grades",
            type: "DELETE",
            contentType: "application/json",
            data: JSON.stringify({ id: $("#deleteId").val() }),
            success: function() {
                $("#deleteMessage").text("Grade deleted successfully!");
            },
            error: function() {
                $("#deleteMessage").text("Failed to delete grade.").css("color", "red");
            }
        });
    });
});
