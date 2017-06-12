package hoto

import (
	"net/http"
	"fmt"
	"github.com/gorilla/mux"
)

func Start(hotoPort string, mongoEndpoint string)  {
	fmt.Println("starting server...")
	r := mux.NewRouter()

	// TODO: refactor
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "hello world")
	})

	http.Handle("/", r)
	http.ListenAndServe(":"+hotoPort, nil)
}