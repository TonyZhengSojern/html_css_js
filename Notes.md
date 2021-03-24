# Week 1 HTML
## Browser-sync
In the folder where you need to test your .html files, enter `browser-sync start --server --directory --files "*"`

To quit browser sync, press `ctrl + c` in the terminal.

## Git

* Check status: `git status`
* Mark a file as to be commit: `git add FILENAME`. `git add .` to mark everything as to commit.
* Commit: `git commit -m "My First Page."`. `-m` means require message.

## Terminal Command Line
* `Command K` to clear the previous outputs

## Useful websites
* [stackoverflow](stackoverflow.com)
* [JSFiddle](jsfiddle.net): you can type in html, css, and JS codes. it will generate the output with a unique URL that you can share.
* [codepen.io](codepen.io): similar to JSFiddle, but more features. You can also sign up so that you can see all your histories.
* [css tricks](css-tricks.com)
* [W3C](w3.org)
* [Can I Use](caniuse.com): keeps track of HTML5, CSS, JS updates to see which browser supports what feature
* [Validator](validator.w3.org): check the website you write and see if it's good
* [w3schools](www.w3schools.com/browsers/browsers_stats.asp): check the market share of the browsers

## HTML Ruls
* No space is allowed to exist between the opening bracket and the tag name. And likewise, space is not allowed between the opening bracket and the foreword slash of the closing tag. 
* However, you must have at least one space between the tag itself and any of its attributes, and space is allowed everywhere else and is simply ignored. 
* attributes can only be specified on the opening tag, so you can't specify an attribute on the closing tag
* Self-closing tag: `<p/>` <=> `<p></p>` in XML, but only use the latter in HTML5.

## HTML tags 
* In line elements: if it is nested in a block element, then on the page it will be in the same line. If it is not nested in the block element, it will be in a new line.
* Block elements: it will always start a new line.

# Week 2 CSS (Cascading style sheets)

## CSS rule: see Lecture 12

## Selector: see Lecture 13

* Element selector: the selector's name is just the element name of a html tag.
* class selector: start with a '.', plus class name. The class selector does require a little bit of a change to your HTML document in that each element that you want that class applied to has to have a attribute "class" equal to the class name.
* id selector: The way you specify an id selector is by specifying the value of an id of an element within your HTML document, preceded by a pound sign.
* we can group the selectors with commas when define the selectors. 

## Combining selectors: See Lecture 14

* `p.big{font-size: 20px;}`: Only p elements AND with class big will be 20 px.
* Child selector: ```article > p {
	color: blue;
}
``` It applies only to element p that are DIRECT CHILD of an article element.
* descendant selector: ```article p {
	color: blue;
}``` It applies to element p that are direct OR indirect CHILD of an article element.
* These does not limit to element selector.

## Pseudo-Class Selectors: See Lecture 15 (`after` file)

* Pseudo-class selectors address targeting only the structures that can be targeted by simple combinations of regular selectors, or targeting the ability to style based on user interaction with the page.  For example, we would want the styling of an element to change if the user hovers or moves their mouse over that element.

* Syntex: ```selector:pseudo-class{
	...
}```. the `pseudo-class` is pre defined. 

* e.g. of the pseudo-class selectors: `:link`, `:visited`, `:hover`, `:active`, `:nth-child(...)`

* **Make Sure The styles are clear and readable. don't try to get fancy and show off, or it will be an maintenance nightmare.**

## Style Placement: Lecture 16

## Conflict Resolution: Lecture 17

* Concepts of Cascading: resolving conflicts of differnt styles applying to the same target's same property
	* origin: resolving conflicts of differnt styles applying to the same target's same property. 
		Rule: the last declaration wins. The lower rule will win.
	* merge: when two rules apply to the same target, but defining different properties of the target.
		Rule: the rules merge. 
	* inheritance: 
		Rule: every child and grandchild and so on will also apply the rules applied to the parent.
	* specificity:
		Rule: Most specific selector combination wins.
		* Specificity score: treat the following sequence as digits. e.g. style, id, no class, no element -> 1100; no style, id, no class, 2 elements -> 0102 = 102. Since 1100 > 102, the first style sheet wins.
			1. `style="..."`: 
			2. `id`: 
			3. Class, pseudo-class, attribute
			4. # of Elements

## Styling Texts: Lecture 18

* [This website](http://www.w3schools.com/cssref/css_websafe_fonts.asp) gives you the commonly used font family. 



## The Box Model: Lecture 19

* The horizontal margins will add to each other (cumulative); the vertical margins will take the biggest margin of the two adjoined boxes (Collapse).  

* We talked about the fact that you should prefer to use box-sizing border-box. And that will keep things consistent for you as you change the border and the padding properties. 

* We spoke about the universal selector, the star selector, and how it can affect every single element in the entire HTML page. 

* And we also spoke about cumulative and collapsing margins. Remember, horizontal margins are cumulative, and for the most part, in most circumstances, the vertical ones collapse. 

* We also spoke about the cases where the content overflows the size of the actual box and what do we do about it using the overflow property. 

## Background: Lecture 20

## Positioning Elements by Floating: Lecture 21

* floating elements can produce very flexible layouts. Floats are taken out of their normal document flow, and they're positioned at the top left or right edge of the containing element.

* Also, floats don't have vertical margin collapse, so previously hidden or collapsed margins will show up once you float the element. 

* And remember that to resume normal document flow, use the clear property. Either clear left, clear right or clear both.

## Relative and Absolute Element Positioning: Lecture 22

* when you specify position to be relative, it keeps the space of the box in the original position, but move the element to a position specified using the original position as the anchor. e.g. `top: 50px; left: 50px;` will move the element from it's original position down by 50 px and right by 50 px. the element is not taken out of normal document flow.

* when you specify position to be absolute, it is taken out of the normal document flow. the idea of absolute positioning is that all offsets, top, bottom, left, right, are all relative to the position of the nearest ancestor which has positioning set on it other than static. In other words, some parent, grandparent, on and on and on, ancestor has to have its positioning set other than static, and then the absolute positioning will actually start working.


## Media Queries: Lecture 23

* media queries starts with `@media (some_media_feature_to_determine_true_or_false)`. If true, the styles will apply. the most common media feature is `min-width` and `max_widh`
* And & OR: `(min-width: 768px) and (max-width: 800px)` OR `(min-width: 768px) , (max-width: 800px)`
* boundaries are all inclusive. so make sure the boundries of two media queries do not overlap with each other.


## Responsive Design: Lecture 24

* responsive design definition: a site that's designed to adapt its layout to the viewing environment by using fluid, proportion-based grids, flexible images, and CSS3 media queries. And by proportion-based grids, what we mean is or hinting to Is that the width of these grids or these columns as we'll see in a moment should be specified using a percentage.


## Twitter Bootstrap: Lecture 25

* [Bootstrap Website](getbootstrap.com/getting-started/)
* [Jquery](jquery.com)


## Bootstrap Grid System: Lecture 26

* Boostrap Grid System must be inside a container class or container-fluid class
* Then we should put columns into a class = 'row'


# Week 3

## Visit with the client
* Most clients have NO IDEA what they want. It's your job to ask questions to figure it out
	* Bring examples of similar businesses to start the conversation
* Less is more.
	* Encourage your client not to cram information on the site
* Find a way for the client to INVEST in the project.
	* Have them commit to provide information
* Have client designate ONE PERSON responsible for decisions
* Limit number of revisions UPFRONT
	* If it's a paying job, limit number of FREE revisions
* Google for 'web development client questionnaire' to understand what questions to ask the client
* Involve others if needed - e.g. a graphic design, photography, etc.
* Get an idea of what the client has right now


## Design overview: Lecture 28 & 29

* Put together some mockup first [balsamiq](balsamiq.com)
* import a font from google font:
	1. Go to google fonts and search for the font you want 
	2. click quick use
	3. copy the code of `Add this code to your website` and paste it in your html file
	4. copy the font-family css code and put it in your css file


## Lecture 30, 31, 32, 33: Coding the Navigation Bar of the Site
* refer to [bootstrap documentations](getbootstrap.com) often to understand the pre-defined classes.
* refer to [the glyphicons page](getbootstrap.com/components/#glyphicons) to get the glyphs (i.e. symbols)
* Use Chrome's inspect to find where a style is defined. 


# Week 4 Javascript

## Lecture 40 - Environment for JS

* Command + option + i: call the chrome developer tools. Console is where the javascript will run. When you start the browser sync and undock the console, you can run your javascript in sublime.

* Where to place javascript code? 
	* You can have a `script` tag and write javascript within it.: `<script> console.log(x) </script>`
	* You can use an external file: `<script src="js/script.js"></script>`

* `console.log(x)`: it allows the console to execute whatever is in the log().


## Lecture 41 - JS basics

* function: `var a = function () {}` OR `function a () {}`. Invokes the function: `a();`

* Scope 
	* Global
	* Function (aka lexical). Functions signifies a new scope. Functions and variables defined here are available only within this function.

* Scope chain
	* Everything is executed in an Execution Context
	* Function invocation creates a new Execution Context
	* Each Execution Context has 
		* Its own Variable Environment
		* Special 'this' object
		* Reference to its Outer Environment
	* Global scope does not have an Outer Environment
	* Referenced (not defined) variable will be searched for in its current scope first, then its outer scope, then its outer scopes' outer scope.

 
## Lecture 43 - JS Structs 

* In the console, you can type in Boolean(something), and it will return whether 'something' is true or false in JS.

* The curly braces must be in the same line of the function/statement. if it's on a separate line, then JS will consider the statement ended.

* When you do a for loop, there are 3 parts that you should put in: `for (var i = 0; i < 10; i++) {...}`. If `i` was defined before (e.g. on a previous for loop), you must not use `var`. Instead, just type `for (i = 0; i < 10; i++) {...}`


## Lecture 44 - Handling Default value

* `function myFunc(a) {...}` set default value of a by 
	```function myFunc(a} {
		a = a || 'the default value'; }
	```




























































