1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById method returns an element with a specified value, getElementByClassName method returns a group  of elements with a specified class name.                                                                              querySelector returns the first element that matches the css selector,     
querySelectorAll returns all Elements that matches the css selector.

2. How do you **create and insert a new element into the DOM**?
ans: document.createElement();
3. What is **Event Bubbling** and how does it work?
ans: Event Bubbling means event rising step by step from childElement to parentElement. 
its work: child div -> parent div-> html 
4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: Instead of placing a separate event listener on each child element, all children can be handled by placing a listener on the parent element.

 Less code is required.
 batter performance.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: preventDefault() stop the elements default behavior and stopPropagation() stops bubbling of events.
