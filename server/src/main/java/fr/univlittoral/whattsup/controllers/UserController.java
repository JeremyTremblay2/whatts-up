package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.protobuf.UserProtos.*;
import fr.univlittoral.whattsup.mappers.UserMapper;
import fr.univlittoral.whattsup.model.bo.UserBO;
import fr.univlittoral.whattsup.model.dto.RegistrationRequestDTO;
import fr.univlittoral.whattsup.model.dto.UserDTO;
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

    @PostMapping(produces = "application/json")
    public ResponseEntity<UserDTO> addUser(@RequestBody RegistrationRequestDTO registrationRequestDTO) {
        UserDTO createdUser = userService.addUser(new UserBO(null, registrationRequestDTO.getUsername(), registrationRequestDTO.getPassword(), true));
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        UserDTO updatedUser = userService.updateUser(id, UserMapper.toBO(userDTO));
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) {
        UserDTO user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(produces = "application/x-protobuf")
    public ResponseEntity<UserPageProto> getUsers(@RequestParam(defaultValue = "0") int page,
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