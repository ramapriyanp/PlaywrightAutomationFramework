const { Loginpage } = require('../pageObjects/Loginpage');
const {DashboardPage} = require('../pageObjects/DashboardPage');
const {CartPage} = require('../pageObjects/CartPage');
const {OrderReview} = require('../pageObjects/OrderReview');

class POManager
{
    constructor(page)   {  
        this.page = page;
        this.Loginpage = new Loginpage(this.page);
        this.DashboardPage = new DashboardPage(this.page);
        this.CartPage = new CartPage(this.page);
        this.OrderReview = new OrderReview(this.page);
    }                       

    getLoginPage()
    {
        return this.Loginpage;
    }

    getDashboardPage()
    {
        return this.DashboardPage;
    }
    getCartPage()
    {
        return this.CartPage;
    }
    getOrderReview()
    {
        return this.OrderReview;
    }
}

module.exports = {POManager};