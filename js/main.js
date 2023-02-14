let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        selectedVariant: 0,
        altText: "A pair of socks",
        // inStock: false, 
        brand: 'Vue Mastery',
        // inventory: 0,
        OnSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{variantId: 2234, variantColor: 'green', variantImage: "./assets/vmSocks-green-onWhite.jpg", variantQuantity: 15}, 
                  {variantId: 2235, variantColor: 'blue', variantImage: "./assets/vmSocks-blue-onWhite.jpg", variantQuantity: 5}],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 1,
    },      
             
    methods: {        
    addToCart() {
        this.cart += 1
        this.variants[this.selectedVariant].variantQuantity -= 1
    } ,

    deleteFromCart() {
        this.cart -= 1
        this.variants[this.selectedVariant].variantQuantity += 1
        },

    updateProduct(index) {
        this.selectedVariant = index;
        console.log(index);
        }
},

    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        }, 
        inventory(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        Sale(){
            return "Проходит распродажа";
        }
}
             
             
             
 })
 
 
//  Экземпляр Vue —  Этот объект содержит различные свойства и методы, которые дают экземпляру Vue возможность хранить данные и выполнять какие-то действия.


Vue.component('product', {
    template: `
    <div class="product">
     ...
    </div>
  `,
    data() {
        return {
            // тут будут данные
        }
    },
    methods: {
        // тут будут методы
    },
    computed: {
        // тут будут вычисляемые свойства
    }
 })
 
 