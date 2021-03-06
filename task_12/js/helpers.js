const LOCALE = getLocale();

/**
 * Updates current time display
 * @param clockElement
 */
function updateClock(clockElement) {
  clockElement.innerHTML = new Date().toLocaleTimeString(LOCALE);
}

/**
 * Initializes clock display
 */
function initializeClock() {
  const currentTimeElement = document.getElementById("current-time");
  updateClock(currentTimeElement);
  window.setInterval(() => updateClock(currentTimeElement),
    1000);
}

/**
 * Updates copyright year
 */
function setCopyYear() {
  const copyYearElement = document.getElementById("copy-year");
  copyYearElement.innerText = '' + new Date().getFullYear();
}

/**
 * Detects user agent locale
 * @returns {string}
 */
function getLocale() {
  if (navigator.languages !== undefined)
    return navigator.languages[0];
  else
    return navigator.language;
}

/**
 * Converts milliseconds to minutes and seconds mm:SS
 * @param milliseconds
 * @returns {string} mm:SS
 */
function timeMs2Time(milliseconds) {
  let seconds = Math.round(milliseconds/1000);
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return minutes + ':' + (seconds < 10 ? '0'+seconds : seconds);
}