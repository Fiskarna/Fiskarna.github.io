$( "#hidd" ).hide(); //hide amount of correctness

function answerpress() {
    $( this ).on( "click", function() {
        if ( $( "#butt" ).hasClass( 'actev' ) ) {
            $( this ).parent().children().removeClass( "solocted" );
            $( this ).addClass( "solocted" );
        }
    } );
};

function buttonpress() {
    $( this ).on( "click", function() {
        $( this ).removeClass( "actev" );
        var amountofRight = $( ".an.correct.solocted" ).length;
        $( "#rights" ).html( amountofRight );
        $( "#hidd" ).show();
        $( ".an" ).css( "background-color", "red" );
        $( ".an.correct" ).css( "background-color", "lightgreen" );

        if ( amountofRight == "0" ) {
            $( "#speshalmesage" ).html( "Zero??? Friend, you gotta try again. You'll get it right this time! Reload your page to try again. " );
        } else if ( amountofRight == "1" ) {
            $( "#speshalmesage" ).html( "You can do better than this. Reload your page to try again!" );
        } else if ( amountofRight == "2" ) {
            $( "#speshalmesage" ).html( "That's half. Reload your page to try again." );
        } else if ( amountofRight == "3" ) {
            $( "#speshalmesage" ).html( "You need just one more correct answer! Reload your page to try again." );
        } else if ( amountofRight == "4" ) {
            $( "#speshalmesage" ).html( "You got them ALL! That's so cool!<br>This is a gift to your from Bowie: <span style='color: #f45b5c;'>C4asu4lXm4S3</span>" );
        }

    } );
};


$( 'head' ).append( '<style>.solocted {border: 2px solid black;} .an {cursor: pointer; padding: 1px 10px;} .an:hover {background: #e0daca;} .qu {padding: 1px; font-weight: bold;}</style>' );