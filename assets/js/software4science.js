;(() =>{
    "use strict"
    $(document).ready(function () {
        $('#sidebar-collapse-title').on('click', function () {
            $('#sidebar').toggleClass('active')
        })

        $('#sidebar-collapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        })
    })
})()
