package main

import "fmt"


type contactInfo struct {
	email string
	phoneNo string
}

type Person struct {
	firstName string
	lastName  string
	contact contactInfo
}

func main() {

	// Method-1
	//john := Person{"John", "Doe"}

	alex := Person{
		firstName: "Alex", 
		lastName: "Jackson",
		contact: contactInfo{
			email: "alex@gmail.com",
			phoneNo: "555888999",
		},
	}

	fmt.Println("Alex : ", alex)

	fmt.Printf("%+v", alex)

}