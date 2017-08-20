/**
 * 
 */


module.exports = function parseJSON(str) {
  let parsed
  try {
    parsed = JSON.parse(str)
  } catch (e) {
    console.log(e)
  }
  return parsed
}
