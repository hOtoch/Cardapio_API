package com.example.cardapio.food;

public record FoodListDTO(Long id, String title, String image, Float price) {

    public FoodListDTO(Food food){
        this(food.getId(),food.getTitle(), food.getImage(), food.getPrice());
    }
}
