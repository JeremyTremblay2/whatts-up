package main

import (
	"fmt"
	"log"
	"net/http"
)

// Handler for the root endpoint
func helloHandler(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprintf(w, "Hello, World!")
	if err != nil {
		return
	}
}

func main() {
	// Register the handler function for the root endpoint
	http.HandleFunc("/", helloHandler)

	// Start the server on port 8080
	log.Println("Server is running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
