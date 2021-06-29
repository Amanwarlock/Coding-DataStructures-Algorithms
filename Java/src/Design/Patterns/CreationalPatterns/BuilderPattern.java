package Design.Patterns.CreationalPatterns;

class Order {

    //customer
    public String name, street, city, postalCode;

    //products
    public String productName;
    public int productQty;

    @Override
    public String toString() {
        return "Order{" +
                "name='" + name + '\'' +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", productName='" + productName + '\'' +
                ", productQty=" + productQty +
                '}';
    }
}

class OrderBuilder {
    Order order = new Order();

    public CustomerBuilder createCustomer() {
        return new CustomerBuilder(order);
    }

    public ProductBuilder addProducts() {
        return new ProductBuilder(order);
    }

    public Order build() {
        return this.order;
    }
}

class CustomerBuilder extends OrderBuilder {
    public CustomerBuilder(Order order) {
        this.order = order;
    }

    public CustomerBuilder addCustomerName(String name) {
        this.order.name = name;
        return this;
    }

    public CustomerBuilder addStreet(String street) {
        this.order.street = street;
        return this;
    }

    public CustomerBuilder addCity(String city) {
        this.order.city = city;
        return this;
    }

    public CustomerBuilder addPostalCode(String code) {
        this.order.postalCode = code;
        return this;
    }
}

class ProductBuilder extends OrderBuilder {

    public ProductBuilder(Order order) {
        this.order = order;
    }

    public ProductBuilder addProductName(String name) {
        this.order.productName = name;
        return this;
    }

    public ProductBuilder addProductQty(int qty) {
        this.order.productQty = qty;
        return this;
    }

}

public class BuilderPattern {
    public static void main(String[] args) {
        OrderBuilder orderBuilder = new OrderBuilder();

        Order order = orderBuilder.createCustomer().addCustomerName("Aman Kareem").
                addStreet("4693 E Alamos Ave").addCity("Frenso").addPostalCode("93726").
                addProducts().addProductName("Irish Spring").addProductQty(2).build();

        System.out.println("Order created \n" + order);
    }

}
