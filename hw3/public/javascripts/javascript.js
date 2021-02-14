// Adrian Muth
// Start script when page has loaded
      $(document).ready(function() {
        // When 'Order' button is clicked
        $("#notes").click(function() {
          var submittedtext = $("textarea#submitbox").val();
          if (submittedtext.includes("vegan")) {
            alert("Warning: These cheesecakes contain dairy!");
          } else {
            // Get order info as variables
            var quantity = $("#quantity").find(":selected").val();
            var topping = $("input[name='topping']:checked").val();
            // Replace form with order information
            $( "div#form" ).replaceWith( "<p>Thank you! Your order has been placed.  You have ordered " + quantity + " " + topping + " cheesecake(s) with a note stating \"" + submittedtext + "\".</p>");
          }
        });
        /**
        External Citation
        Date: 7 February 2021
        Problem: Needed to open the dropdown menu on hover
        Resource: https://tutorialdeep.com/knowhow/open-dropdown-hover-jquery-js/
        Solution: I used the code shown in this post.
        */
        $(function() {
          // Opens scrollable dropdown menu upon hovering -->
          $('#months').hover(function() {
              $(this).attr('size', 5);
          },
          function() {
              $(this).attr('size', 1);
          });
        });
      });