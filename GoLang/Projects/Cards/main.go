package main

func main() {

	//var card string = "Ace of Spades"
	cards := newDeck()

	//cards.print()

	//fmt.Println(cards.toString())

	cards.saveToFile("my_cards")

	newCards := newDeckFromFile("my_cards")

	newCards.print()
}
