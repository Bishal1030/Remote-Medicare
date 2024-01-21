$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        $.post('/html/codes/html_form_handler.cfm', $(this).serialize(), function (data) {
            // Handle success notification using SweetAlert2
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Form sent successfully"
              }).then(() => {
                // Reset the form
                $('form')[0].reset();
            });


        }).fail(function () {
            // Handle error notification using SweetAlert2
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Error! please try again"
              });
        });
    });
});


