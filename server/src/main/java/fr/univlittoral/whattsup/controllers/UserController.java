package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.whattsup.model.dto.UserDTO;
import fr.univlittoral.whattsup.model.entities.postgres.UserEntity;
import fr.univlittoral.whattsup.services.AuthService;
import fr.univlittoral.whattsup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserEntity> addUser(@RequestBody UserDTO userDTO) {
        UserEntity createdUser = userService.addUser(userDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        UserEntity updatedUser = userService.updateUser(id, userDTO);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Integer id) {
        UserEntity user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<UserEntity>> getUsers(@RequestParam int page, @RequestParam int size) {
        Page<UserEntity> users = userService.getUsers(PageRequest.of(page, size));
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}