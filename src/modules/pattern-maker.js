exports.createPattern = (lines) => {
    let output = []
    let patternChars = flipRows(lines.split("\n"))
    output.push(`ch ${patternChars[0].length*2+1}`)
    console.log(patternChars)
    patternChars.forEach((line) => {
        let lineText = ""
        let currChar,nextChar;
        for (let i = 0; i < line.length; i++) {
            currChar = line.substring(i,i+1)
            nextChar = (currChar == "i" ? "o" : "i")
            let distance = line.indexOf(nextChar,i) - i
            if (distance < 0) {
                distance = line.length - i
            }
            if (currChar == "i") {
                if (i == 0) {
                    lineText += " 1 dc,"
                }
                lineText += ` [ch1, dc]x${distance},`
            } else {
                lineText += ` ${(i == 0 ? distance*2+1 : distance*2)} dc,`
            }
            i+= distance-1;
        }

        output = [...output,lineText]
    })
    return output;
}

const flipRows = (lines) => {
    return lines.map((line,index) => {
        if (index % 2 == 0) {
            console.log(index,line)
            return line
        } else {
            return line.split("").reverse().join("")
        }
    })
}