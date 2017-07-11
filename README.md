# Hoto

Centralized logging for microservices. (under development)

![Hoto Design Doc](/docs/assets/Hoto.png?raw=true)

## Getting Started

- Register you service with Hoto
    - should be the service's name
- Establish a Context
    - in the hoto UI logs may be sorted via Contex
    - examples of Context:
        - user interaction
        - errors
        - health
- Establish a Topic within the Context
    - think of topics as 'what do your logs represent'
    - example topics for the Contex 'Health'
        - API hits
        - Ram monitoring
        - Restarts
- Send data to Hoto
    - hoto accepts a very precise format for receiving log data
        - context/logbook: Something to separate your logs
        - topic/logpage: the topic of your log book
        - type: what type of log are you sending? This is used to build descriptive statistics and other visualizations.
            - text
            - number
        - priority: how important is this log? could you go by without seeing it? could it be ignored?
            - 0: I don't care whatsoever
            - 1: I can get by without seeing it
            - 2: Seeing this will be useful
            - 3: This is pretty important
            - 4: Oh, wow! What the hell!
            - 5: OMFG!! GTFO! Call 911!!
        - value: The value is tied to the 'type' field
            - if type=text
                - "im a log"
                - "im some other log"
            - is type=number
                - 593.243
                - 20392.123
```json
{
  "machine": "Payment Microservices",
  "machineHost": "payments.spotin.io",
  "logbook": "Network Related Issues",
  "severity": "debug", // info, debug, warn, error, fatal
  "value": "offload to child microservice ATH successful"
}
```
  
### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
