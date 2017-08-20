// https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code_lz=G4QwTgBAZg9jEF4IG8QC4CMAaARmgTFgMZoDMWAJmgCwC-AUPaJKlhAHSdgCmAzgC61E0OPSIwAdrxgAbbuxkwA5gAoQASgDcYydLkLlKngK1A

exports.objectWithoutProperties = (obj, keys) => { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
