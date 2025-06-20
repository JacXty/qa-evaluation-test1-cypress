describe('Test de reserva de viaje espacial', () => {
  beforeEach(() => {
    // visitar la pagina de destino
    cy.visit(Cypress.env('url'));
  });

  it('Valida el título de la página Space & Beyond | Testim.io demo', () => {
    // validar el titulo de la pagina
    cy.title().should('eq', Cypress.env('title'));
    cy.screenshot('titulo-pagina');

  });

  it('Busca la existencia de un destino llamado Madan', () => {
    // validar la existencia de un destino llamado Madan
    cy.contains('Madan').should('exist');
    cy.screenshot('destino-madan');

  });

  it('Selecciona una fecha de salida', () => {
    //seleccionar una fecha de salida, la fecha solo se ecuentra activa en la fecha actual
    cy.get('[data-react-toolbox="date-picker"] input').first().click();
    cy.get('.theme__active___2k63V > span').click();
    //seleccionar la fecha
    cy.get(':nth-child(29) > span').click();
    //dar click al boton de seleccionar fecha
    cy.get('button').last().click();
    cy.screenshot('fecha-salida');
  });

  it('Elige boleto para 2 adultos y 1 niño', () => {
    //seleccionar pasajeros
    cy.selectPassengers();
    cy.screenshot('boleto-2-adultos-1-nino');
  });

  it('Filtra destinos por planetas de color azul', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    cy.screenshot('filtro-color-azul');
  });

  it('Reserva el planeta Tayabamba', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    //reservar el planeta Tayabamba
    cy.reservePlanet('Tayabamba');
    cy.screenshot('reserva-planeta-tayabamba');
  });

  it('Llena todos los datos del formulario', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    //reservar el planeta Tayabamba
    cy.reservePlanet('Tayabamba');
    //llenar el formulario
    cy.fillForm();
    cy.screenshot('llenar-formulario');
  });

  it('Carga una fotografía del carnet de vacunación', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    //reservar el planeta Tayabamba
    cy.reservePlanet('Tayabamba');
    //cargar una fotografía del carnet de vacunación
    cy.uploadPhoto();
    cy.screenshot('cargar-fotografia');
  });

  it('Ingresa el código promocional 30076', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    //reservar el planeta Tayabamba
    cy.reservePlanet('Tayabamba');
    //cargar una fotografía del carnet de vacunación
    cy.uploadPhoto();
    //ingresar el código promocional 30076
    cy.enterPromoCode('30076');
    cy.screenshot('ingresar-codigo-promocional');
  });

  it('Realiza el pago', () => {
    //abrir el filtro de color
    cy.openColorFilter();
    //seleccionar el color azul
    cy.selectColor();
    //reservar el planeta Tayabamba
    cy.reservePlanet('Tayabamba');
    //cargar una fotografía del carnet de vacunación
    cy.uploadPhoto();
    //ingresar el código promocional 30076
    cy.enterPromoCode('30076');
    //realizar el pago
    cy.makePayment();
    cy.screenshot('realizar-pago');
  });
});

