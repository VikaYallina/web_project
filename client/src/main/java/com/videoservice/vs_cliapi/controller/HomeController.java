package com.videoservice.vs_cliapi.controller;

import com.videoservice.vs_cliapi.dto.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/home")
public class HomeController {

    @GetMapping("/all")
    public ResponseEntity<?> home(){
        return ResponseEntity.ok(new MessageResponse("Welcome home"));
    }
}
