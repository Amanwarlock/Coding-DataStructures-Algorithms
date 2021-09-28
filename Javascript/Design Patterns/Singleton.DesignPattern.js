
/**
 * @description
 * Category: Creational Design Pattern
 * Name: Singleton
 */


/**
 * Method - 1
 * using functions
 */

const Singleton = (function(){
   
    let _instance;

    function Manager(){
        let name;
        let type;
    }

    function createInstance(){
        return new Manager();
    }

    return {
        getInstance: () =>{
            if(!_instance){
                _instance = createInstance();
            }

            return _instance;
        }
    }

})();

console.log("Singleton Check 1 : ", Singleton.getInstance() === Singleton.getInstance());

/**
 * Method - 2
 * using Classes
 */
 class Singleton2 {
    constructor() {
      if (!Singleton2._instance) {
        Singleton2._instance = this;
      }
      return Singleton2._instance;
    }

    count = 0;

    incrementCount(){
        return this.count++;
    }

    static getInstance() {
      return this._instance;
    }
  }

  let instance1 = new Singleton2();
  let instance2 = new Singleton2();

  console.log("Singleton Check 2 : ", instance1.incrementCount(), instance2.incrementCount() );
  console.log("Singleton Check 2 : ", instance1.incrementCount(), instance2.incrementCount() );
  console.log("Singleton Check 2 : ", instance1.incrementCount(), instance2.incrementCount() );