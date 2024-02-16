$(function(){
    $pages = $(".page");
    $pageTitle = $('#pageTitle');

    $pageTitle.text("Connected to Database Name");

    $('.primaryNavMovePage').on('click', function (e){
        const $this = $(this);
        const openPageTarget = $this.attr("data-navPageTarget");
        $pages.each( (index, page) => {
            const $page = $(page);
            if($page.attr("data-navPage") === openPageTarget) {
                $page.removeClass("d-none");
                // $pageTitle.text(openPageTarget);
            }else{
                $page.addClass("d-none");
            }
        });
    });

    $('*[data-navPageTarget="items"]').first().trigger('click');


    const $model = $('.model');
    $model.on('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })

});
