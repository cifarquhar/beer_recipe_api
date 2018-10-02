package com.codeclan.example.beer_recipe_api.controller;

import com.codeclan.example.beer_recipe_api.exception.BeerNotFoundException;
import com.codeclan.example.beer_recipe_api.model.Beer;
import com.codeclan.example.beer_recipe_api.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class BeerController {

    @Autowired
    private BeerRepository beerRepository;

    @GetMapping("/beers")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<Beer> getBeers(Pageable pageable){
        return beerRepository.findAll(pageable);
    }

    @PostMapping("/beers")
    public Beer createBeer(@Valid @RequestBody Beer beer){
        return beerRepository.save(beer);
    }

    @PutMapping("/beers/{beerId}")
    public Beer updateBeer(@PathVariable Long beerId,
                           @Valid @RequestBody Beer beerRequest){
        return beerRepository.findById(beerId)
                .map(beer -> {
                    beer.setName(beerRequest.getName());
                    beer.setStyle(beerRequest.getStyle());
                    beer.setDescription(beerRequest.getDescription());
                    beer.setOG(beerRequest.getOG());
                    beer.setFG(beerRequest.getFG());
                    beer.setMashTemp(beerRequest.getMashTemp());
                    beer.setMashTime(beerRequest.getMashTime());
                    beer.setBoilTime(beerRequest.getBoilTime());
                    beer.setFermentationTime(beerRequest.getFermentationTime());
                    beer.setConditioningTime(beerRequest.getConditioningTime());
                    beer.setYeast(beerRequest.getYeast());
                    beer.setIngredients(beerRequest.getIngredients());
                    beer.setHopSchedule(beerRequest.getHopSchedule());
                    beer.setFavourite(beerRequest.isFavourite());
                    beer.setIbu(beerRequest.getIbu());
                    return beerRepository.save(beer);
                }).orElseThrow(() -> new BeerNotFoundException("Can't update a beer that doesn't exist!"));
    }

    @DeleteMapping("/beers/{beerId}")
    public ResponseEntity<?> deleteBeer(@PathVariable Long beerId){
        return beerRepository.findById(beerId)
                .map(beer -> {
                    beerRepository.delete(beer);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new BeerNotFoundException("Can't delete a beer that doesn't exist!"));
    }

}
