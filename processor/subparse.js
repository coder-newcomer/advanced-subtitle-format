// SubParser

var subparser = {
  assStyle(string) {
    var returned = {}
    string = string.trim().replace('Format: ', '').replace('Style: ', '').split('\n')
    string[0] = string[0].split(',')
    string[1] = string[1].split(',')
    for (let i =0; i < string[0].length; i++) {
      returned[string[0][i]] = string[1][i]
    }
    return returned
  }
}

var test = `
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,16,&Hffffff,&Hffffff,&H0,&H0,0,0,0,0,100,100,0,0,1,1,0,2,10,10,10,1
`
subparser.assStyle(test)
console.log("Wait...")