// nav bar

$(document).ready(function() {
  $('.nav-link-item').click(function() {
    // Remove active class from all other nav-link-items
    $('.nav-link-item').not(this).find('a').removeClass('active');
    
    // Add active class to the first anchor inside the clicked nav-link-item
    $(this).find('a:first').addClass('active');
  });

  $('.nav-link-item a').click(function(e) {

    // Remove active class from all other nav-link-items
    $('.nav-link-item').not($(this).closest('.nav-link-item')).find('a').removeClass('active');
    
    // Add active class to the clicked anchor
    $(this).addClass('active');
  });


  $('.dropdown-link-item').click(function() {
    // Remove active class from all other dropdown-link-items
    $('.dropdown-link-item').not(this).find('a').removeClass('active');
    
    // Add active class to the first anchor inside the clicked dropdown-link-item
    $(this).find('a:first').addClass('active');
  });

  $('.dropdown-link-item a').click(function(e) {
    // Prevent the default link behavior
    e.preventDefault();
    
    // Remove active class from all other nav-link-items
    $('.dropdown-link-item').not($(this).closest('.dropdown-link-item')).find('a').removeClass('active');
    
    // Add active class to the clicked anchor
    $(this).addClass('active');
  });
});

// menu section

$(document).ready(function() {
  // Attach click event handler to all menu links
  $('#menu-categories li a').click(function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Remove 'active' class from all links
    $('#menu-categories li a').removeClass('active');

    // Add 'active' class to the clicked link
    $(this).addClass('active');

    // Get the text of the clicked link
    var category = $(this).text();

    // Update the menu category name
    $('#menu-category-name').text(category);
  });
});


// show back to top button when user scroll
var btn = $('#back-to-top');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 250) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});


// add active class to nav links when scrolling

$(document).ready(function() {
  $(window).on('scroll', function() {
    var currentPosition = $(this).scrollTop();

    // Get the current section
    var currentSection = null;
    $('section').each(function() {
      var target = $(this);
      var targetTop = target.offset().top;
      var targetBottom = targetTop + target.outerHeight();

      if (currentPosition >= targetTop && currentPosition < targetBottom) {
        currentSection = target;
        return false; // Exit the loop early
      }
    });

    if (currentSection) {
      var currentSectionId = currentSection.attr('id');

      // Add active class to the anchor elements contained within nav-link-item
      $('.nav-link-item').find('a[href="#' + currentSectionId + '"]').addClass('active');

      // Remove active class from other anchor elements contained within nav-link-item
      $('.nav-link-item').find('a').not('[href="#' + currentSectionId + '"]').removeClass('active');
    }
  });
});
