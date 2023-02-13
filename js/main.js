let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        // inStock: false, 
        inventory: 12,
        OnSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{variantId: 2234, variantColor: 'green', variantImage: "./assets/vmSocks-green-onWhite.jpg"}, 
                  {variantId: 2235, variantColor: 'blue', variantImage: "./assets/vmSocks-blue-onWhite.jpg"}],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 1,

             addToCart() {
                    this.cart += 1
                    this.inventory -= 1
             } ,

            deleteFromCart() {
                this.cart -= 1
                this.inventory += 1
                },

            updateProduct(variantImage) {
                this.image = variantImage
            }
    }
 })
 
 
//  Экземпляр Vue —  Этот объект содержит различные свойства и методы, которые дают экземпляру Vue возможность хранить данные и выполнять какие-то действия.


 