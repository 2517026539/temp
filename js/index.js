$(function () {
    $('.turn-down').click(function () {
        $('#state').click()
        console.log(1)
        console.log($('#state'))
        // $('#state').attr('selected', true)
    })
    $('#state').css('color', '#999999').children().css('color', '#333333').eq(0).css('color', '#999999').parent().change(function () {
        $(this).css('color', '#333333')
    })
    $('#state').click(function() {
        console.log('test')
    })

    $('.query').click(function () {
        console.log("query")
    })
})

