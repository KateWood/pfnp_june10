console.log('connected')

document.getElementById('headshot').addEventListener('click', function() {
  this.style.borderColor = 'red'
})

document.getElementById('title').addEventListener('click', function() {
  if (document.body.style.backgroundColor == 'red') {
    document.body.style.backgroundColor = 'hotpink'
  } else {
    document.body.style.backgroundColor = 'red'
  }
})
