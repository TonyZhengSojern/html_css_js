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























