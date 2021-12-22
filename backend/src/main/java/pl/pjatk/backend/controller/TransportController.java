package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.pjatk.backend.model.Transport;
import pl.pjatk.backend.service.TransportService;

import java.util.List;

@RestController
@RequestMapping("/transports")
public class TransportController {

    private final TransportService service;

    public TransportController(TransportService service) {
        this.service = service;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Transport> getTransportById(@PathVariable Long id) {
        if (service.existTransportById(id)) {
            return ResponseEntity.ok(service.getTransportById(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Transport>> getTransports() {
        return ResponseEntity.ok(service.getTransports());
    }

    @PostMapping("/add")
    public ResponseEntity<Transport> addTransport(@RequestBody Transport transport) {
        return ResponseEntity.ok(service.addTransport(transport));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Transport> updateTransportById(@PathVariable Long id, @RequestBody Transport transport) {
        if (service.existTransportById(id)) {
            return ResponseEntity.ok(service.updateTransportById(id, transport));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTransportById(@PathVariable Long id) {
        if (service.existTransportById(id)) {
            service.deleteTransportById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
