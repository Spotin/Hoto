package hoto

import (
	"net/http"
	"fmt"
	"github.com/gorilla/mux"
	"encoding/json"
	"log"
)

func Start(hotoPort string, mongoEndpoint string)  {
	fmt.Println("starting server..." + hotoPort + mongoEndpoint)
	r := mux.NewRouter()

	// TODO: refactor
	r.HandleFunc("/logs", func(w http.ResponseWriter, r *http.Request) {
		mongo := GetMongoSession(mongoEndpoint)
		decoder := json.NewDecoder(r.Body)
		var logBook LogBook
		err := decoder.Decode(&logBook)
		if err != nil {
			panic(err)
		}
		defer r.Body.Close()
		err = mongo.DB("hoto").C("logs").Insert(logBook)
		if err != nil {
			log.Println("inserted")
		}
	}).Methods("POST")

	// TODO: refactor
	r.HandleFunc("/logs", func(w http.ResponseWriter, r *http.Request) {
		mongo := GetMongoSession(mongoEndpoint).DB("hoto").C("logs")
		var logBooks []LogBook
		mongo.Find(nil).All(&logBooks)
		fmt.Println(logBooks[0].Priority)
	}).Methods("GET")

	http.Handle("/", r)
	err := http.ListenAndServe(":3000", nil)
	panic(err)
}