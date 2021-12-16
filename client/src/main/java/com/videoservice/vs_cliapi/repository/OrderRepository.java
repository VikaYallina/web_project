package com.videoservice.vs_cliapi.repository;

import com.videoservice.vs_cliapi.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
