import { RichUtils } from 'draft-js';

export default() => {
  return {
    customSt
  }
}

const OL_FULL_REGEX = /^\d+\.\s$/;
//const OL_SUBLISTING_FULL_REGEX = TODO;

/**
* Auto-list Plugins
*
* This is an addition to already created plugin for ordered listing. This plugin inspects the 'tab'
* keystroke and returns a sublisting.
* After the sublisting ends, it detects two strokes -> a. double return OR b. shiftKey + tab
* If the user wants to exit the ordered listing, he can simply press backspace till he reaches start
* of the line.
*
* @return {Object} Object defining the draft-js api methods
 **/

function autoListPlugin(){
  let keyNumHistory = [];

  return {

    /**
     * Listens to all keyboard events, intercept and returns custom command
     * if the sequence of typed characters matches the criteria for creating ordered
     * listing
     */
    keyBindingFn: (e) => {
      keyNumHistory = trackCharacters

    //   if(e.)
    // }

  }
}
