# CandyAccordion
A simple, lightweight accordion utilising the jQuery Library

## Includes
Include the following in your head along with the jQuery Library (if you don't have it already).

`<link rel="stylesheet" href="/jquery.candyaccordion.css" type="text/css" />`
`<script type="text/javascript" src="jquery.candyaccordion.js"></script>`

## The Call
Attach the Accordion to your markup

    $(document).ready(function() {
        $('#accordion').candyaccordion();
    });

The following defaults can be overwritten

    $(document).ready(function() {
        $('#accordion').candyaccordion({
		        speed: 250 // Animation speed in MS
				    titleClass: 'candytitle' // Class used on the title
				    textClass: 'candytext' // Class uesed for the text
		    });
    });

## The Markup
CandyAccordion uses unordered lists in the following way to utilise it

    <ul id="accordion" class="candyaccordion">
			    <li>
				    <div class="candytitle">Accordion Title</div>
				    <div class="candytext">Accordion text</div>
			    </li>
    </ul>

Have fun :)
