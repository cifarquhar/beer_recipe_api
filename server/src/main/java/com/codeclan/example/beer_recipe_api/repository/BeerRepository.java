package com.codeclan.example.beer_recipe_api.repository;

import com.codeclan.example.beer_recipe_api.model.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Long> {
}
