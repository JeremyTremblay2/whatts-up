package fr.univlittoral.whattsup.services;

import fr.univlittoral.protobuf.UserProtos;
import fr.univlittoral.whattsup.mappers.UserMapper;
import fr.univlittoral.whattsup.model.dto.RegistrationRequestDTO;
import fr.univlittoral.whattsup.model.bo.UserBO;
import fr.univlittoral.whattsup.model.dao.postgres.UserRepository;
import fr.univlittoral.whattsup.model.dto.UserDTO;
import fr.univlittoral.whattsup.model.entities.postgres.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDTO addUser(UserBO userBO) {
        UserEntity user = new UserEntity();
        user.setUsername(userBO.getUsername());
        user.setPassword(passwordEncoder.encode(userBO.getPassword()));
        return UserMapper.toDTO(UserMapper.toBO(userRepository.save(user)));
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    public UserDTO updateUser(Integer id, UserBO userBO) {
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        user.setUsername(userBO.getUsername());
        user.setPassword(passwordEncoder.encode(userBO.getPassword()));
        return UserMapper.toDTO(UserMapper.toBO(userRepository.save(user)));
    }

    public UserDTO getUserById(Integer id) {
        return UserMapper.toDTO(UserMapper.toBO(userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"))));
    }

    public Page<UserProtos.UserProto> getUsers(Pageable pageable) {
        Page<UserEntity> userPage = userRepository.findAll(pageable);
        List<UserBO> usersBO = userPage.getContent().stream().map(UserMapper::toBO).toList();
        // Implement a logic here if we want.
        List<UserProtos.UserProto> userProtos = usersBO.stream().map(UserMapper::toProto).toList();
        return new PageImpl<>(userProtos, pageable, userPage.getTotalElements());
    }
}
