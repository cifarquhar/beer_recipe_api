package com.codeclan.example.beer_recipe_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BeerRecipeApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeerRecipeApiApplication.class, args);
	}
}
