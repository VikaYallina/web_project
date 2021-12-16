package com.videoservice.vs_cliapi.service;

import com.videoservice.vs_cliapi.dto.request.CartItemRequest;
import com.videoservice.vs_cliapi.dto.request.CartRequest;
import com.videoservice.vs_cliapi.model.Cart;
import com.videoservice.vs_cliapi.model.CartItem;
import com.videoservice.vs_cliapi.model.Item;
import com.videoservice.vs_cliapi.repository.CartItemRepository;
import com.videoservice.vs_cliapi.repository.CartRepository;
import com.videoservice.vs_cliapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public Cart getCartItems(Long id) {
        Optional<Cart> opt = cartRepository.findCartByUserId(id);
        if (opt.isPresent()){
            Cart cart = opt.get();
            if (cart.getItems().size()>0)
                return cart;
            return null;
        }
        Cart ncart = new Cart();
        ncart.setUserId(id);
        ncart.setBill(0.0);
        cartRepository.save(ncart);
        return null;
    }

    @Transactional
    public void addCartItem(Long id, CartItemRequest item) {
        Optional<Cart> optionalCart = cartRepository.findCartByUserId(id);
        Optional<Item> optionalItem = itemRepository.findItemById(item.getProductId());

        if (optionalItem.isPresent()){
            Item citem = optionalItem.get();
            Double price = citem.getPrice();
            String name = citem.getTitle();

            if (optionalCart.isPresent()){
                Cart cart = optionalCart.get();
                CartItem itemInCart = cart.getItems().stream().filter(fitem -> Objects.equals(fitem.getProductId(), citem.getId())).findAny().orElse(null);
                if (itemInCart != null){
                    itemInCart.setQuantity(itemInCart.getQuantity()+item.getQuantity());
                    cartItemRepository.save(itemInCart);
                }else{
                    itemInCart = new CartItem(item.getProductId(), name, item.getQuantity(), price);
                    cartItemRepository.save(itemInCart);
                    List<CartItem> list = cart.getItems();
                    list.add(itemInCart);
                    cart.setItems(list);
                }
                cart.setBill(round(cart.getBill()+citem.getPrice()* item.getQuantity(),4));
                cartRepository.save(cart);
            }else{
                Cart ncart = new Cart();
                CartItem nitem = new CartItem(item.getProductId(), name, item.getQuantity(), price);
                cartItemRepository.save(nitem);
                List<CartItem> nlist = new ArrayList<>();
                nlist.add(nitem);

                ncart.setId(id);
                ncart.setItems(nlist);
                ncart.setBill(price);

                cartRepository.save(ncart);
            }
        }
    }

    @Transactional
    public Cart deleteCartItem(Long userId, Long itemId) {
        Optional<Cart> optionalCart = cartRepository.findCartByUserId(userId);
        if (optionalCart.isPresent()){
            Cart cart = optionalCart.get();
            CartItem itemInCart = cart.getItems().stream().filter(fitem -> Objects.equals(fitem.getProductId(), itemId)).findAny().orElse(null);
            if (itemInCart != null){
                cart.setBill(round(cart.getBill()-itemInCart.getQuantity()*itemInCart.getPrice(),4));
                cart.getItems().remove(itemInCart);
            }
            cartRepository.save(cart);
            return cart;
        }
        return null;
    }

    public static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();

        BigDecimal bd = BigDecimal.valueOf(value);
        bd = bd.setScale(places, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
