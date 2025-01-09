package fr.univlittoral.whattsup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(
		scanBasePackages = "fr.univlittoral.whattsup"
)
public class WhattsUpApplication {

	public static void main(String[] args) {
		SpringApplication.run(WhattsUpApplication.class, args);
	}

}