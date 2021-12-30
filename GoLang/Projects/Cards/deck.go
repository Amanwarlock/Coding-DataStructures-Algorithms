package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

type deck []string

func newDeck() deck{
	cards := deck{}

	suits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}

	values := []string{"Ace", "Jack", "King", "Queen", "2", "3", "4", "5", "6", "7", "8", "9"}

	for _, suit := range suits{
		for _, val := range values{
			cards = append(cards, val + " of " + suit)
		}
	}

	return cards
}

// Receiver fucntions available on objects
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func deal(d deck, handSize int) (deck, deck){
	return d[:handSize], d[handSize:]
}

func (d deck) toString() string{
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(fileName string) error{
	return ioutil.WriteFile(fileName, []byte(d.toString()), 0666)
}

func newDeckFromFile(fileName string) deck{
	bs, err := ioutil.ReadFile(fileName)

	if err != nil {
		fmt.Println("Error : ", err)
		os.Exit(1)
	}

	s := strings.Split(string(bs), ",")
	return deck(s)
}

func (d  deck) shuffle(){
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	for i := range d{
		newPos := r.Intn(len(d) - 1)
		d[i], d[newPos] = d[newPos], d[i]
	}
}