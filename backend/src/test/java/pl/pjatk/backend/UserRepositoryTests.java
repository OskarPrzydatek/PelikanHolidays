package pl.pjatk.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import pl.pjatk.backend.model.User;
import pl.pjatk.backend.model.UserType;
import pl.pjatk.backend.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository repo;

    @Test
    public void testCreateAdmin() {
        User user = new User();
        user.setEmail("admin@pelikanholidays.com");
        user.setPassword("admin");
        user.setFirstName("admin");
        user.setLastName("admin");
        user.setUserType(UserType.ADMIN);

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getId());

        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
    }

    @Test
    public void testCreateManager() {
        User user = new User();
        user.setEmail("manager@pelikanholidays.com");
        user.setPassword("manager");
        user.setFirstName("manager");
        user.setLastName("manager");
        user.setUserType(UserType.MANAGER);

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getId());

        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
    }

    @Test
    public void testCreateWorker() {
        User user = new User();
        user.setEmail("worker@pelikanholidays.com");
        user.setPassword("worker");
        user.setFirstName("worker");
        user.setLastName("worker");
        user.setUserType(UserType.WORKER);

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getId());

        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
    }
}
