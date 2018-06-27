/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */
;(() =>{
    "use strict"
    $(document).ready(function () {
     //   $('#sidebar-collapse-title').on('click', function () {
     //       $('.sidebar').toggleClass('active')
     //   })

   
     

        $('#sidebar-collapse').on('click', function () {
            $('.sidebar').toggleClass('active');
        })
    })

    window.addEventListener('resize', () => {
    
        if(window.innerHeight < window.innerWidth){
           
            $('.sidebar').toggleClass('active')
        }
    })
})()
