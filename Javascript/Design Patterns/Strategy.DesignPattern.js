

class Package {
    calculate(){
        return `Package Calculation`;
    }
}

class FedEx extends Package {
    calculate(){
        return `FedEx Package Calculation`;
    }
}

class UPS extends Package {
    calculate(){
        return `UPS Package Calculation`;
    }
}

class USPS extends Package {
    calculate(){
        return `USPS Package Calculation`;
    }
}


class Shipping {
    company = null;

    setStrategy(strategy){
        this.company = strategy;
    }

    calculate(_package){
        return this.company.calculate(_package);
    }
}


const fedEx = new FedEx();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping();

shipping.setStrategy(fedEx);
console.log(shipping.calculate({from: 'Fresno', to: 'SFO'}));

shipping.setStrategy(ups);
console.log(shipping.calculate({from: 'Fresno', to: 'SFO'}));

shipping.setStrategy(usps);
console.log(shipping.calculate({from: 'Fresno', to: 'SFO'}));
