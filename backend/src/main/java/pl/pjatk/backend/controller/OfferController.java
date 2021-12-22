package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.pjatk.backend.model.Offer;
import pl.pjatk.backend.service.OfferService;

import java.util.List;

@RestController
@RequestMapping("/offers")
public class OfferController {

    private final OfferService service;

    public OfferController(OfferService service) {
        this.service = service;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Offer> getOfferById(@PathVariable Long id) {
        if (service.existsOfferById(id)) {
            return ResponseEntity.ok(service.getOfferById(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Offer>> getOffers() {
        return ResponseEntity.ok(service.getOffers());
    }

    @PostMapping("/add")
    public ResponseEntity<Offer> addOffer(@RequestBody Offer offer) {
        return ResponseEntity.ok(service.addOffer(offer));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Offer> updateOfferById(@PathVariable Long id, @RequestBody Offer offer) {
        if (service.existsOfferById(id)) {
            return ResponseEntity.ok(service.updateOfferById(id, offer));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteOfferById(@PathVariable Long id) {
        if (service.existsOfferById(id)) {
            service.deleteOfferById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
