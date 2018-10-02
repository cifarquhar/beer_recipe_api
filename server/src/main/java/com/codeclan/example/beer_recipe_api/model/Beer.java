package com.codeclan.example.beer_recipe_api.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashMap;

@Entity
@Table(name = "beers")
public class Beer implements Serializable {

    @Id
    @GeneratedValue(generator = "beer_generator")
    @SequenceGenerator(
            name = "beer_generator",
            sequenceName = "beer_Sequence",
            initialValue = 1
    )
    private Long id;

    @Column
    private String name;

    @Column
    private String style;

    @Column
    private String description;

    @Column
    private int OG;

    @Column
    private int FG;

    @Column
    private int mashTemp;

    @Column
    private int mashTime;

    @Column
    private int boilTime;

    @Column
    private int fermentationTime;

    @Column
    private int conditioningTime;

    @Column
    private String yeast;

    @Column
    private HashMap<String, Integer> ingredients;

    @Column
    private HashMap<String, Integer> hopSchedule;

    @Column
    private boolean favourite;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getOG() {
        return OG;
    }

    public void setOG(int OG) {
        this.OG = OG;
    }

    public int getFG() {
        return FG;
    }

    public void setFG(int FG) {
        this.FG = FG;
    }

    public int getMashTemp() {
        return mashTemp;
    }

    public void setMashTemp(int mashTemp) {
        this.mashTemp = mashTemp;
    }

    public int getMashTime() {
        return mashTime;
    }

    public void setMashTime(int mashTime) {
        this.mashTime = mashTime;
    }

    public int getBoilTime() {
        return boilTime;
    }

    public void setBoilTime(int boilTime) {
        this.boilTime = boilTime;
    }

    public int getFermentationTime() {
        return fermentationTime;
    }

    public void setFermentationTime(int fermentationTime) {
        this.fermentationTime = fermentationTime;
    }

    public int getConditioningTime() {
        return conditioningTime;
    }

    public void setConditioningTime(int conditioningTime) {
        this.conditioningTime = conditioningTime;
    }

    public String getYeast() {
        return yeast;
    }

    public void setYeast(String yeast) {
        this.yeast = yeast;
    }

    public HashMap<String, Integer> getIngredients() {
        return ingredients;
    }

    public void setIngredients(HashMap<String, Integer> ingredients) {
        this.ingredients = ingredients;
    }

    public HashMap<String, Integer> getHopSchedule() {
        return hopSchedule;
    }

    public void setHopSchedule(HashMap<String, Integer> hopSchedule) {
        this.hopSchedule = hopSchedule;
    }

    public boolean isFavourite() {
        return favourite;
    }

    public void setFavourite(boolean favourite) {
        this.favourite = favourite;
    }
}
