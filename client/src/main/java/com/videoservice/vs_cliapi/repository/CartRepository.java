package com.videoservice.vs_cliapi.repository;

import com.videoservice.vs_cliapi.model.Cart;
import com.videoservice.vs_cliapi.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findCartByUserId(Long userId);
}
