
import * as functions from './commands';

// comandos para la pagina de destino
/**
 * This is a command to select the number of passengers
 * @param {any} 'selectPassengers'
 * @param {any} functions.selectPassengers
 * @returns {any}
 */
Cypress.Commands.add('selectPassengers', functions.selectPassengers);

/**
 * This is a command to open the color filter
 * @param {any} 'openColorFilter'
 * @param {any} functions.openColorFilter
 * @returns {any}
 */
Cypress.Commands.add('openColorFilter', functions.openColorFilter);

/**
 * This is a command to select the color
 * @param {any} 'selectColor'
 * @param {any} functions.selectColor
 * @returns {any}
 */
Cypress.Commands.add('selectColor', functions.selectColor);

/**
 * This is a command to reserve a planet
 * @param {any} 'reservePlanet'
 * @param {any} functions.reservePlanet
 * @returns {any}
 */
Cypress.Commands.add('reservePlanet', functions.reservePlanet);

/**
 * This is a command to fill the form
 * @param {any} 'fillForm'
 * @param {any} functions.fillForm
 * @returns {any}
 */
Cypress.Commands.add('fillForm', functions.fillForm);

/**
 * This is a command to upload a photo
 * @param {any} 'uploadPhoto'
 * @param {any} functions.uploadPhoto
 * @returns {any}
 */
Cypress.Commands.add('uploadPhoto', functions.uploadPhoto);

/**
 * This is a command to enter a promo code
 * @param {any} 'enterPromoCode'
 * @param {any} functions.enterPromoCode
 * @returns {any}
 */
Cypress.Commands.add('enterPromoCode', functions.enterPromoCode);

/**
 * This is a command to make a payment
 * @param {any} 'makePayment'
 * @param {any} functions.makePayment
 * @returns {any}
 */
Cypress.Commands.add('makePayment', functions.makePayment);