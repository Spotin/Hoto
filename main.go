package main

import (
	"fmt"

	"github.com/go-yaml/yaml"
	"log"

	"github.com/Hoto/hoto"
	"github.com/Hoto/helpers"
)

var hotoConfigYaml = func() string {
	data, err := helpers.ReadFile("hoto_config.yaml")
	if err != nil {
		fmt.Errorf(err.Error())
	}

	return data
}()

type T struct {
	Hoto struct {
		HotoPort 	string   `yaml:"hoto_port"`
		MongoEndpoint   string   `yaml:"mongo_endpoint"`
	}
}

func main() {
	unmarshaledHotoConfig := T{}

	err := yaml.Unmarshal([]byte(hotoConfigYaml), &unmarshaledHotoConfig)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	endpointForMongo := unmarshaledHotoConfig.Hoto.MongoEndpoint
	portForHoto	 := unmarshaledHotoConfig.Hoto.HotoPort

	hoto.Start(endpointForMongo, portForHoto)
}
