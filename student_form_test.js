$(document).ready(function() {
    $("#addStudentForm").submit(function(event) {
        event.preventDefault();
        $.post("/manage_students", {
            First_Name: $("#firstName").val(),
            Last_Name: $("#lastName").val(),
            Course: $("#course").val()
        }, function() {
            $("#addMessage").text("Student added successfully!");
        }).fail(function() {
            $("#addMessage").text("Failed to add student.").css("color", "red");
        });
    });

    $("#updateStudentForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_students",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                id: $("#updateId").val(),
                First_Name: $("#updateFirstName").val(),
                Last_Name: $("#updateLastName").val(),
                Course: $("#updateCourse").val()
            }),
            success: function() {
                $("#updateMessage").text("Student updated successfully!");
            },
            error: function() {
                $("#updateMessage").text("Failed to update student.").css("color", "red");
            }
        });
    });

    $("#deleteStudentForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/manage_students",
            type: "DELETE",
            contentType: "application/json",
            data: JSON.stringify({ id: $("#deleteId").val() }),
            success: function() {
                $("#deleteMessage").text("Student deleted successfully!");
            },
            error: function() {
                $("#deleteMessage").text("Failed to delete student.").css("color", "red");
            }
        });
    });
});
