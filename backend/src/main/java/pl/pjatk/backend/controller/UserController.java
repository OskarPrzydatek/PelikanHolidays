package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import pl.pjatk.backend.model.User;
import pl.pjatk.backend.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/login")
    public ResponseEntity<User> getUserByEmail(@RequestParam String email, @RequestParam String password) {
        User user = userRepository.findByEmail(email);

        if (user.getEmail().equals(email) && user.getPassword().equals(password)) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/register")
//    public String showRegistrationForm(Model model) {
//        model.addAttribute("user", new User());
//        return "signup_form";
//    }
//
//    @PostMapping("/process_register")
//    public String processRegister(User user) {
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        String encodedPassword = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encodedPassword);
//
//        userRepository.save(user);
//
//        return "register_success";
//    }
}
