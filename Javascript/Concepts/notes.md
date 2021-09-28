# Funtions:

    <> Bind:
        > We can bind context and fix parameters. It will return a new function
        > example fn to double values. In this case fix the first param as 2
            // let newFn = oldFn.bind(null, 2); // scope is null as we don't need
            // newFn(3) // ans - 6
            // so all params are passed as is
            // This concept is called partial funcs

    <>  Decorator:
            > These take funcs and modify there behaviour by acting as a wrapper
            >

# Objects:
    <> Getters and Setters
            let obj = {
                name: 'aman'
            }

            this is similar to

            let obj = {
                set name(val){
                    this._name = val;
                }

                get name(){
                    return this._name;
                }
            }

            obj.name = 'Aman' //  we don't call setters and getters as func by (). Instead called just like how we access obj key / prop / data member
            console.log(obj.name)
        