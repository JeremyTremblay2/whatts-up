package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.whattsup.model.dto.UserDTO;
import fr.univlittoral.whattsup.model.entities.postgres.UserEntity;
import fr.univlittoral.whattsup.model.protos.*;
import fr.univlittoral.whattsup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    @GetMapping(produces = "application/x-protobuf")
    public ResponseEntity<UserProtoPage> getUsers(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<UserProto> userProtoPage = userService.getUsers(pageable);

        var users = UserPageProto.newBuilder()
                .addAllUsers(userProtoPage.getContent())
                .setTotalPages(userProtoPage.getTotalPages())
                .setTotalElements(userProtoPage.getTotalElements())
                .setPageSize(userProtoPage.getSize())
                .setPageNumber(userProtoPage.getNumber())
                .build();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}