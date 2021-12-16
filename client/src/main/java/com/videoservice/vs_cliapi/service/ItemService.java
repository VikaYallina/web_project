package com.videoservice.vs_cliapi.service;

import com.videoservice.vs_cliapi.dto.request.ItemRequest;
import com.videoservice.vs_cliapi.model.Item;
import com.videoservice.vs_cliapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public Item getItemById(Long id){
        Optional<Item> opt = itemRepository.findItemById(id);
        return opt.orElse(null);
    }

    public void addItem(ItemRequest item){
        System.out.println(item.getTitle());
        Item i = new Item();
        i.setTitle(item.getTitle());
        i.setDescription(item.getDescription());
        i.setCategory(item.getCategory());
        i.setPrice(item.getPrice());
        itemRepository.save(i);
    }

    public Item updateItem(Long id, Item item){
        Optional<Item> opt = itemRepository.findItemById(id);
        if (opt.isPresent()){
            Item item_old = opt.get();
            return null;
        }else{
            return null;
        }
    }

    public void deleteById(Long id){
        itemRepository.deleteById(id);
    }
}
