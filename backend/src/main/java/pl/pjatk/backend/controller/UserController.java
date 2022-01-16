package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import pl.pjatk.backend.model.User;
import pl.pjatk.backend.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public ResponseEntity<User> processLoginByEmailAndPassword(
            @RequestParam String email, @RequestParam String password) {
        User user = userService.findUserByEmail(email);

        if (user.getEmail().equals(email) && user.getPassword().equals(password)) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        if (userService.existUserById(id)) {
            return ResponseEntity.ok(userService.findUserById(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.addUser(user));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable Long id, @RequestBody User user) {
        if (userService.existUserById(id)) {
            return ResponseEntity.ok(userService.updateUserById(id, user));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        if (userService.existUserById(id)) {
            userService.deleteUserById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
