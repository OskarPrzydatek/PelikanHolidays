package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pl.pjatk.backend.model.User;
import pl.pjatk.backend.repository.UserRepository;

@Controller
public class AppController {

    private final UserRepository userRepository;

    public AppController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("")
    public String viewHomePage() {
        return "index";
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
