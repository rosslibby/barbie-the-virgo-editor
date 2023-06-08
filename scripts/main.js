const textColorInput = document.getElementById('text-color')
const text = document.getElementById('text')
const fontSizeInput = document.getElementById('font-size')
const outlineSizeInput = document.getElementById('outline-size')
const outlineColorInput = document.getElementById('outline-color')
const lineHeightInput = document.getElementById('line-height')
const atSymbol = document.getElementById('at-symbol')
const justifyInput = Array.from(document.querySelectorAll('input[type="radio"][name="justify"]'))
const saveButton = document.getElementById('save-to-image')

// insert unicorn @ symbol when "@" is pressed
text.addEventListener('keydown', e => {
  if (e.key === '@') {
    e.preventDefault()
    const unicornAtSymbol = new Image()
    unicornAtSymbol.src = 'assets/unicorn-at-sign.png'
    unicornAtSymbol.classList.add('at-symbol')
    console.log(text.style.fontSize)
    unicornAtSymbol.height = parseInt(text.style.fontSize) * 0.85
    text.appendChild(unicornAtSymbol)
  }
})

// adjust stroke color
const handleTextColorAdjustment = e => {
  text.style.setProperty('--text-color', e.target.value)
}

textColorInput.addEventListener('change', handleTextColorAdjustment)
textColorInput.addEventListener('input', handleTextColorAdjustment)

const handleFontSizeAdjustment = e => {
  text.style.fontSize = e.target.value + 'px'

  const atSymbols = Array.from(document.querySelectorAll('.at-symbol'))
  atSymbols.forEach(symbol => {
    symbol.height = e.target.value * 0.85
  })
}

// adjust font size
fontSizeInput.addEventListener('change', handleFontSizeAdjustment)
fontSizeInput.addEventListener('input', handleFontSizeAdjustment)


// adjust stroke size
const handleStrokeSizeAdjustment = e => {
  text.style.setProperty('--stroke-width', e.target.value + 'px')

  const atSymbols = Array.from(document.querySelectorAll('.at-symbol'))
  atSymbols.forEach(symbol => {
    symbol.style.boxShadow = `0 0 0 ${e.target.value}px #ffffff`
  })
}

outlineSizeInput.addEventListener('change', handleStrokeSizeAdjustment)
outlineSizeInput.addEventListener('input', handleStrokeSizeAdjustment)

// adjust stroke color
const handleStrokeColorAdjustment = e => {
  text.style.setProperty('--stroke-color', e.target.value)
}

outlineColorInput.addEventListener('change', handleStrokeColorAdjustment)
outlineColorInput.addEventListener('input', handleStrokeColorAdjustment)

// adjust line height
const handleLineHeightAdjustment = e => {
  text.style.lineHeight = e.target.value + 'px'
}

lineHeightInput.addEventListener('change', handleLineHeightAdjustment)
lineHeightInput.addEventListener('input', handleLineHeightAdjustment)

// set justification
const handleJustify = e => {
  text.style.textAlign = e.target.value
}

justifyInput.forEach(input => {
  input.addEventListener('change', handleJustify)
})

// save to image
saveButton.addEventListener('click', e => {
  domtoimage.toPng(text).then(function (blob) {
    window.saveAs(blob, `barbie-the-virgo-${(new Date()).getTime()}.png`)
  })
})

/* https://dev.to/codingdudecom/everything-about-stroke-text-in-css-561i */
/* function calculateStrokeTextCSS(steps) {
  var css = "";
  for (var i = 0; i < steps; i++) {
    var angle = (i * 2 * Math.PI) / steps;
    var cos = Math.round(10000 * Math.cos(angle)) / 10000;
    var sin = Math.round(10000 * Math.sin(angle)) / 10000;
    css +=
      "calc(var(--stroke-width) * " +
      cos +
      ") calc(var(--stroke-width) * " +
      sin +
      ") 0 var(--stroke-color),";
  }

  return css;
}*/