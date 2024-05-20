package com.example.cardapio.controller;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodCreateDTO;
import com.example.cardapio.food.FoodListDTO;
import com.example.cardapio.food.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;


    @PostMapping
    public void saveFood(@RequestBody FoodCreateDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);
    }


    @GetMapping
    public List<FoodListDTO> getAll(){

        List<FoodListDTO> foodList = repository
                .findAll()
                .stream()
                .map(FoodListDTO::new)
                .toList();
        return foodList;
    }
}
