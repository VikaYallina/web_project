package com.videoservice.vs_cliapi.repository;

import com.videoservice.vs_cliapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserById(Long id);
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

}
