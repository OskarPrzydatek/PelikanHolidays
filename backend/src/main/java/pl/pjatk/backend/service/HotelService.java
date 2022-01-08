package pl.pjatk.backend.service;

import org.springframework.stereotype.Service;
import pl.pjatk.backend.model.Hotel;
import pl.pjatk.backend.repository.HotelRepository;

import java.util.List;

@Service
public class HotelService {

    private final HotelRepository hotelRepository;

    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public Hotel getHotelById(Long id) {
        return hotelRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }

    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public Hotel updateHotelById(Long id, Hotel hotel) {
        if (hotelRepository.existsById(id)) {
            return hotelRepository.save(hotel);
        } else {
            throw new RuntimeException();
        }
    }

    public void deleteHotelById(Long id) {
        if (hotelRepository.existsById(id)) {
            hotelRepository.deleteById(id);
        } else {
            throw new RuntimeException();
        }
    }

    public boolean existsHotelById(Long id) {
        return hotelRepository.existsById(id);
    }
}
