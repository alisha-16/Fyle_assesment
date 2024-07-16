$(document).ready(function() {
    $('.list-group-item').on('click', function(e) {
        e.preventDefault();
        var imgSrc = $(this).data('img');
        $('#projectImage').attr('src', imgSrc);

        // Remove active class from all items and add it to the clicked item
        $('.list-group-item').removeClass('active-item');
        $(this).addClass('active-item');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                alert('Form successfully submitted!');
                $('#contactForm')[0].reset();
                $('#contactModal').modal('hide');
            },
            error: function(error) {
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });
});
