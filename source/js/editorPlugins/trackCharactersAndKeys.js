/**
 * Mapping keycodes to output characters that relate list making
 * @type {Object}
 **/

const characterMapping = {
  106: '*',
  110: '.',
  189: '-',
  190: '.',
  'shift': {
    56: '*',
    221: '*',
    190: '.',
  },
};

/**
 * Track characters generated from the keyBoard Input
 * @param {Array}  history list of numbers used for listing
 * @param {KeyDownEvent} e Synthetic keyboard event from draftjs 'keyBindingFn'
 * @return {Array} the adjusted history of numbers, two possibilities -> either new list number
 * will be added OR the last one will be popped out depending upon what user would expect
 */

function trackCharacters(history = [], e){
  const {keyCode, ShiftKey} = e;

  //Keep history to <=


}

