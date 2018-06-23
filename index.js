function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var gn = document.querySelector('div#grand-node')
  var next = gn.querySelector('div')
  while (next) {
    gn = next
    next = gn.querySelector('div')
  }
  return gn
}
