package pl.pjatk.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.pjatk.backend.model.Hotel;
import pl.pjatk.backend.service.HotelService;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    private final HotelService hotelService;

    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        if (hotelService.existsHotelById(id)) {
            return ResponseEntity.ok(hotelService.getHotelById(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Hotel>> getHotels() {
        return ResponseEntity.ok(hotelService.getHotels());
    }

    @PostMapping("/add")
    public ResponseEntity<Hotel> addHotel(@RequestBody Hotel hotel) {
        return ResponseEntity.ok(hotelService.addHotel(hotel));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Hotel> updateHotelById(@PathVariable Long id, @RequestBody Hotel hotel) {
        if (hotelService.existsHotelById(id)) {
            return ResponseEntity.ok(hotelService.updateHotelById(id, hotel));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteHotelById(@PathVariable Long id) {
        if (hotelService.existsHotelById(id)) {
            hotelService.deleteHotelById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
