package hoto

import "gopkg.in/mgo.v2/bson"

type LogBook struct {
	ID	  bson.ObjectId	`json:"id" bson:"_id,omitempty"`
	LogBook   string        `json:"logbook" bson:"logbook"`
	LogPage   string        `json:"logpage" bson:"logpage"`
	Number    float64       `json:"number" bson:"number"`
	Text      string 	`json:"text" bson:"text"`
	Priority  int8 	        `json:"priority" bson:"priority"`
}