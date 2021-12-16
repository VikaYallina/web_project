package com.videoservice.vs_cliapi.controller;

import com.videoservice.vs_cliapi.model.Order;
import com.videoservice.vs_cliapi.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

//    @GetMapping("/{id}")
//    public Order getById(@PathVariable Long id){
//        return orderService.getOrders(id);
//    }
//
//    @PostMapping("/{id}")
//    public void addItem(@PathVariable Long id)
}
