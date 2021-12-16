package com.videoservice.vs_cliapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.videoservice.vs_cliapi.dto.request.LoginRequest;
import com.videoservice.vs_cliapi.model.User;
import com.videoservice.vs_cliapi.repository.UserRepository;
import com.videoservice.vs_cliapi.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class MockMvcIntegrationTest {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @AfterEach
    public void reset(){
        userRepository.deleteAll();
    }


    @Test
    public void testLogin() throws Exception {
        User user = new User("username5",encoder.encode("password"), "email6@mail.com");
        userRepository.save(user);

        LoginRequest request = new LoginRequest();
        request.setPassword("password");
        request.setUsername("username");

        mockMvc.perform(post("/api/auth/signin")
                                            .content(objectMapper.writeValueAsString(request))
                                            .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("email6@mail.com"))
                .andExpect(jsonPath("$.id").value(user.getId()));

        userRepository.delete(user);
    }

    @Test
    public void testLoginFailure() throws Exception{
        User user = new User("username1",encoder.encode("password"), "email1@mail.com");
        userRepository.save(user);

        LoginRequest request = new LoginRequest();
        request.setPassword("password");
        request.setUsername("user");

        mockMvc.perform(post("/api/auth/signin")
                        .content(objectMapper.writeValueAsString(request))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnauthorized());

        userRepository.delete(user);
    }
}
