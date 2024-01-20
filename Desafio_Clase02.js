class ProductManager {
    constructor() {
        this.products = [];
        this.productId = 1
    }

    // Método addProduct
    addProduct(title, description, price, thumbnail, stock) {
        const newProduct = {
            id: this.productId,
            title,
            description,
            price,
            thumbnail,
            stock
        };
        this.products.push(newProduct);
        this.productId++;
    }

    // Método getProduct
    getProduct() {
        console.log('Los productos son:', this.products);
    }

    // Método getProductById
    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            console.log('Producto encontrado:', product);
        } else {
            console.error('NOT FOUND, No se encontro ningun producto con ese ID.', id);
        }
    }
}

const productos = new ProductManager();
//Agregando productos al arreglo con addproduct
productos.addProduct("Manzana", "Frutas frescas", "5", "manzanasfotos.com", "60");
productos.addProduct("Bananas", "Fruta Fresca", "10", "Bananasfotos.com", "10");
//Devolver productos del arreglo
productos.getProduct();
//Buscar productos por ID
console.log('Buscar productos por ID');
productos.getProductById(1);
productos.getProductById(3);
