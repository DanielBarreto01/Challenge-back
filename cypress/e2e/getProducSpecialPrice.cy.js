describe('Prueba de obtener precios de productos con Cypress', () => {
    it('Debería obtener los precios de los productos y responder con una lista de productos', () => {
      // Reemplaza 'user_id' y 'product_brand' con valores reales
      const user_id = '6574e80fbbd60825accb7019';
      const product_brand = 'puma';
  
      // Enviar la solicitud GET
      cy.request('GET', `http://localhost:5000/api/${user_id}/${product_brand}`)
        .then((response) => {
          // Verificar el código de estado
          expect(response.status).to.equal(200);
  
          // Verificar que la respuesta sea un array
          expect(response.body.products).to.be.an('array');
  
          // Verificar que cada producto en la respuesta tenga las propiedades requeridas
          response.body.products.forEach((product) => {
            expect(product).to.have.all.keys('name', 'Brand', 'special_price');
          });
        });
    });
  });