import 'cypress-file-upload';

/**
 * Selecciona el numero de pasajeros
 * @returns {any}
 */
export function selectPassengers() {
  console.log('Seleccionando pasajeros');
  cy.get('.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click();
  cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
}

/**
 * Abre el filtro de color
 * @returns {any}
 */
export function openColorFilter() {
  cy.get('.Hero__hero___1FDXn > :nth-child(4) .theme__button___1iKuo').click();
}

/**
 * Selecciona el color
 * @returns {any}
 */
export function selectColor() {
  cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click()
}

/**
 * Reserva un planeta
 * @param {string} planeta
 * @returns {any}
 */
export function reservePlanet(planeta) {
  cy.contains('.theme__cardTitle___3Tyrr', planeta).parent().within(() => {
    cy.contains('Book').click();
  });
}

/**
 * Llena el formulario
 * @returns {any}
 */
export function fillForm() {
  cy.contains(':nth-child(2) > .theme__cardTitle___3Tyrr', 'Tayabamba').parent().within(() => {
    cy.contains('Tayabamba').should('exist');
    cy.contains('Book').click();
  })
  cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Social Security');
  cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('socialsec@gmail.com');
  cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('111-11-1111');
  cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('2124567890');
};

/**
 * Carga una fotografia
 * @returns {any}
 */
export function uploadPhoto() {
  cy.fixture('carne-vacunacion-covid.jpg').then(fileContent => {
    cy.get('input[type="file"]').attachFile({
      fileContent: fileContent.toString(),
      fileName: 'carne-vacunacion-covid.jpg',
      mimeType: 'image/jpg'
    });
  });
}

/**
 * Ingresa un codigo promocional
 * @param {string} codigo
 * @returns {any}
 */
export function enterPromoCode(code) {
  cy.get('.flexboxgrid__col-xs-7___3o2m- > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.flexboxgrid__col-xs-7___3o2m- input').type(code);
  cy.get('.flexboxgrid__col-xs-5___1HkK5 .theme__button___1iKuo').click();
}

/**
 * Realiza un pago
 * @returns {any}
 */
export function makePayment() {
  cy.get(':nth-child(8) > .flexboxgrid__col-xs___1ROHR').click();
}
