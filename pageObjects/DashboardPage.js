class DashboardPage{


    constructor(page){
        this.page = page;       
        this.products = page.locator('.card-body');
        this.addToCartBtn = page.getByRole('button', {name: 'Add To Cart'});
        this.cartBtn = page.locator("[routerlink*='cart']");



}

async searchProductAddToCart(prodName){
    const product = this.products.filter({ hasText: prodName });
    await product.locator(this.addToCartBtn).click();
}

async navigateToCart(){
    await this.cartBtn.click();
}

}

module.exports = {DashboardPage}
