package com.videoservice.vs_cliapi.controller;

import com.videoservice.vs_cliapi.dto.request.CartItemRequest;
import com.videoservice.vs_cliapi.dto.request.CartRequest;
import com.videoservice.vs_cliapi.model.Cart;
import com.videoservice.vs_cliapi.model.CartItem;
import com.videoservice.vs_cliapi.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{id}")
    public Cart getById(@PathVariable("id") Long id){
        return cartService.getCartItems(id);
    }

    @PostMapping("/{id}")
    public void addItem(@PathVariable("id") Long id, @RequestBody CartItemRequest item){
        cartService.addCartItem(id, item);
    }

    @DeleteMapping("/{userId}/{itemId}")
    public Cart deleteItem(@PathVariable("userId") Long userId, @PathVariable("itemId") Long itemId){
        return cartService.deleteCartItem(userId, itemId);
    }
}
