package hoto

import (
	"gopkg.in/mgo.v2"
	"log"
)

func GetMongoSession(url string) *mgo.Session {
	session, err := mgo.Dial(url)
	if err != nil {
		log.Fatal("Not able to find mongoDB instance in " + url)
		return nil
	}

	return session
}
