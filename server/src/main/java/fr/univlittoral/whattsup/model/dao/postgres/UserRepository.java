package fr.univlittoral.whattsup.model.dao.postgres;

import fr.univlittoral.whattsup.model.entities.postgres.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String username);
}