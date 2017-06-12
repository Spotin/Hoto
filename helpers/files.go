package helpers

import (
	"io/ioutil"
	"errors"
)

//Read file and panic if error
func ReadFile(path string) (string, error) {
	data, err := ioutil.ReadFile(path)
	if err != nil {
		return "", errors.New("Failed to open file " + path)
	}

	return string(data), nil
}