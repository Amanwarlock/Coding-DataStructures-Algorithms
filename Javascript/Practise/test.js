

    /**
     * SOLID -
     *  S - Single responsibility principle
     *  O - Open - closed Principle
     *  L -  Liskov Substitution Principle
     *  I - Interface Segregation Principle
     *  D - Dependency Inversion Principle
     */

    /**
     * @since August 6th 2021
     */


    class Portal{
        login(user){
            return new User(); // stack
        }

    }

    /**
     * @description OMS
     *
     */
    class  Order {

        email; // private
        street;
        postalCode;
        City;
        State;
        Card;
        expiry;
        cvv;
        products = ['Dove', ];

        constructor(){
           
        }

        // order - name, qty, price
            
        // customer - blling - shopping - card derail
        createCustomer(){
            return new BuildCustomer(this);
        }

        createOrder(){
            return  new BuildOrder(this);
        }

        build(){
            return this;
        }
    }

    
    class BuildOrder {
         // access modifier
         constructor(order){
             this.order = order;
         }
        addToCart(string){  
            this.order.products.push(string);
        }
    }

    class BuildCustomer{
       
        constructor(order){
            this.order = order;
        }


        addEmail(email){
            this.order.email = email;
            return this.order;
        }

        addStreet(street){
            this.order.street = street;
            return this.order;
        }

        addPostalCode(){

        }

        addCity(){

        }

    }



    class User{
        email;
        pwd;
        _id;
        orders; // linked list head

        placeOrderInstance = null;
        // singleton desing
        placeOrder(user){
            if( placeOrderInstance=== null){
                this.placeOrderInstance = new OrderManagementSystem();
            }
            return this.placeOrderInstance;
        }

    }   




    //////
    //
    const portal = new Portal();

    let user = portal.login('aman@gmail.com', '12334');

    let order = user.placeOrder().createCustomer().addEmail().addCity().createOrder().build();

    


