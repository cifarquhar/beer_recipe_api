package com.codeclan.example.beer_recipe_api.controller;

import com.codeclan.example.beer_recipe_api.model.Beer;
import com.codeclan.example.beer_recipe_api.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class BeerController {

    @Autowired
    private BeerRepository beerRepository;

    @GetMapping("/beers")
    public Page<Beer> getBeers(Pageable pageable){
        return beerRepository.findAll(pageable);
    }

    @PostMapping("/beers")
    public Beer createBeer(@Valid @RequestBody Beer beer){
        return beerRepository.save(beer);
    }

}
