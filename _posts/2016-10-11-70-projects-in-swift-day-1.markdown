---
layout: post
title:  "Day 1 : 70 Projects in Swift (Part 1)"
date:   2016-10-11
categories: mobile 70-projects-swift
---

Recently I started a challenge that aims to improve my iOS development skills. This challenge is about recreating 70 simple projects in 30 days. I started working on Sam's (_http://samvlu.com/_) projects. 

__Project 1__ is called __Tap Counter__. It is an app that has a label and two buttons. The __label__ displays the current value of the tap count. The two buttons manipulates the value of the tap count. The __tap button__ increases the value of the tap count by one for every tap. The __reset button__ resets the tap count to _0_.

<div class="post-image post-image--split">
    <img src="http://samvlu.com/images/2015-08-04-tap-counter.gif" alt="Tap Counter demo" />
    <img src="http://samvlu.com/images/2015-08-05-tap-or-hold-counter.gif" alt="Tap Counter demo" />
    <p class="post-image-caption">
   		This is a demonstration of the Tap Counter and Tap Counter with hold gesture project. Credits to http://samvlu.com.
    </p>
</div>

Implementing the Tap Counter is easy. The interface is composed of a navigation bar, with the reset button, a label, that displays the current tap count and the tap button, that increases the value of tap count. We first create a variable _count_ that holds the current tap count value. We then create an _@IBOutlet_ for the _tap button_. We create an _increment_ function that increase the value of _count_ variable by one. We attach this function to the _tap button's_ _touchDown_ event. The reset button is attached to a function that assigns the value of _count_ to 0.

<pre>
<code class="swift">
var count = 0 

@IBOutlet weak var tapButton : UIButton!

// somewhere in viewDidLoad	
tapButton.addTarget(self, action: #selector(ViewController.increment), for: .touchDown)
</code>
</pre>

There are different ways to implement the tap and hold feature of this app. First approach, is to create a scheduledTimer that runs the increment function as long as the user holds the button.

<pre>
<code class="swift">
var timer : Timer!

timer = Timer.scheduledTimer(timeInterval: 0.01, target: self, 
	selector: #selector(ViewController.increment), userInfo: nil, repeats: true)

// This code adds another event handler for the tap button
// that handles the touchUpInside and touchUpOutside event.
// the touchUp function invalidates the timer
tapButton.addTarget(self, action: #selector(ViewController.touchUp), 
	for: [.touchUpInside, .touchUpOutside])	
</code>
</pre>

The second approach uses a gesture recognizer. We can a __UILongPressGestureRecognizer__ and assign it to the button gesture recognizers.

<pre>
<code class="swift">
let longPressGesture = UILongPressGestureRecognizer(target: self, action: #selector(ViewController.increment))
tapButton.addGestureRecognizer(longPressGesture)
</code>
</pre>

This concludes the part 1 of this day's challenge.




