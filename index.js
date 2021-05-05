   
   $(document).ready(function()
   {
      $("#Carousel1").on('slid.bs.carousel', function(e)
      {
         var index = $(e.relatedTarget).index();
         switch(index)
         {
            case 0:
               ShowObjectWithEffect('wb_PhotoGallery1', 1, '', 0);
               break;
         }
      });
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $('#ThemeableMenu1 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("#Carousel2").bootstrapcarousel({interval:3000, pause: false});
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCubic');
      });
      $('img[data-src]').lazyload();
   });
