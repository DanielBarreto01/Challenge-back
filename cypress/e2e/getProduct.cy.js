describe('Prueba de obtener todos los productos con Cypress', () => {
    it('Debería obtener todos los productos y responder con una lista de productos', () => {
      // Enviar la solicitud GET
      cy.request('GET', 'http://localhost:5000/api/products')
        .then((response) => {
          // Verificar el código de estado
          expect(response.status).to.equal(200);
  
          // Verificar que la respuesta sea un array
          expect(response.body.products).to.be.an('array');
  
          // Verificar que cada producto en la respuesta tenga las propiedades requeridas
          response.body.products.forEach((product) => {
            expect(product).to.have.all.keys('inStock', '_id', 'brand', 'stock', 'price', 'special_price', 'name');
          });
        });
    });
  });