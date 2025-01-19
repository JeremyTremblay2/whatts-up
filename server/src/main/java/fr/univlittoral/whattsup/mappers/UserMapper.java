package fr.univlittoral.whattsup.mappers;

import fr.univlittoral.protobuf.UserProtos.*;
import fr.univlittoral.whattsup.model.bo.UserBO;
import fr.univlittoral.whattsup.model.dto.UserDTO;
import fr.univlittoral.whattsup.model.entities.postgres.UserEntity;

public class UserMapper {
    public static UserProto toProto(UserBO userBO) {
        return UserProto.newBuilder()
                .setId(userBO.getId())
                .setUsername(userBO.getUsername())
                .setPassword(userBO.getPassword())
                .setIsEnabled(userBO.getEnabled())
                .build();
    }

    public static UserBO toBO(UserProto userProto) {
        return new UserBO(
                userProto.getId(),
                userProto.getUsername(),
                userProto.getPassword(),
                userProto.getIsEnabled()
        );
    }

    public static UserBO toBO(UserEntity userEntity) {
        return new UserBO(
                userEntity.getId(),
                userEntity.getUsername(),
                userEntity.getPassword(),
                userEntity.getEnabled()
        );
    }

    public static UserEntity toEntity(UserBO userBO) {
        return new UserEntity(userBO.getId(), userBO.getUsername(), userBO.getPassword(), userBO.getEnabled());
    }

    public static UserDTO toDTO(UserBO userBO) {
        return new UserDTO(userBO.getId(), userBO.getUsername(), userBO.getPassword(), userBO.getEnabled());
    }

    public static UserBO toBO(UserDTO userDTO) {
        return new UserBO(userDTO.getId(), userDTO.getUsername(), userDTO.getPassword(), userDTO.getEnabled());
    }
}
