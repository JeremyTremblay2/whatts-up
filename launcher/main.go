package main

import (
	"fmt"
	"hacker-news/business"
	"hacker-news/controllers"
	"hacker-news/dao"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	connStr := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		getEnv("DB_HOST", "127.0.0.1"),
		getEnv("DB_PORT", "5432"),
		getEnv("DB_USER", "admin"),
		getEnv("DB_NAME", "clickhouse_pg_db"),
		getEnv("DB_PASSWORD", "password"))
	log.Printf("Connecting to database with connection string: %s", connStr)
	hackerNewsDAO, err := dao.NewDatabaseHackerNewsDAO(connStr)
	if err != nil {
		log.Fatalln(err)
	}

	hackerNewsService := business.NewHackerNewsService(hackerNewsDAO)
	hackerNewsController := controllers.NewHackerNewsController(*hackerNewsService)

	mux := http.NewServeMux()
	mux.HandleFunc("/internal-server-error", internalServerErrorHandler)
	mux.Handle("/not-found", http.NotFoundHandler())
	mux.HandleFunc("/hacker-news", hackerNewsController.GetHackerNews)

	handler := corsMiddleware(mux)

	fmt.Println("Server is running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

func getEnv(key, fallback string) string {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	return value
}

func internalServerErrorHandler(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "there has been a error when connecting to database", http.StatusInternalServerError)
}
