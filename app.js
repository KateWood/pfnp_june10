// a way to check that our JS file is properly connected to our HTML file
console.log('connected')

// listens for a click on the main image
document.getElementById('headshot').addEventListener('click', function() {
  // sets the image's border color to red
  this.style.borderColor = 'red'
})

// listens for a click on the "About Me" text
document.getElementById('title').addEventListener('click', function() {
  // changes the page's background color to red or hot pink, depending on the current color
  if (document.body.style.backgroundColor == 'red') {
    document.body.style.backgroundColor = 'hotpink'
  } else {
    document.body.style.backgroundColor = 'red'
  }
})
