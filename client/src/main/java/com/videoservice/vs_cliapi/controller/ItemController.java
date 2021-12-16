package com.videoservice.vs_cliapi.controller;

import com.videoservice.vs_cliapi.dto.request.ItemRequest;
import com.videoservice.vs_cliapi.model.Item;
import com.videoservice.vs_cliapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/item")
public class ItemController {
    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> getAll(){
        return itemService.getItems();
    }

    @GetMapping("/{id}")
    public Item getOne(@PathVariable("id") Long id){
        return itemService.getItemById(id);
    }

    @PostMapping
    public void putOne(@RequestBody ItemRequest item){
        itemService.addItem(item);
    }

    @PostMapping("/{id}")
    public void updateOne(@PathVariable("id") Long id,@RequestBody Item item){
        itemService.updateItem(id,item);
    }

    @DeleteMapping("/{id}")
    public void deleteOne(@PathVariable("id") Long id){
        itemService.deleteById(id);
    }
}
