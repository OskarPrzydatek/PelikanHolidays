package pl.pjatk.backend.service;

import org.springframework.stereotype.Service;
import pl.pjatk.backend.model.User;
import pl.pjatk.backend.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User findUserById(Long id) {
        return repository.findById(id).orElseThrow(RuntimeException::new);
    }

    public User findUserByEmail(String email) {
        return repository.findByEmail(email);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User addUser(User user) {
        return repository.save(user);
    }

    public boolean existUserById(Long id) {
        return repository.existsById(id);
    }

    public User updateUserById(Long id, User user) {
        if (existUserById(id)) {
            return repository.save(user);
        } else {
            throw new RuntimeException();
        }
    }

    public void deleteUserById(Long id) {
        if (existUserById(id)) {
            repository.deleteById(id);
        } else {
            throw new RuntimeException();
        }
    }
}
