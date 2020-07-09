$(function(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newItem = $(this).find('#shopping-list-entry').val();

        $('.shopping-list').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`);
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    })

   $('.shopping-list').on('click', '.shopping-item-delete', function() {
    this.closest('li').remove();
    })
})