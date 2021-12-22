package pl.pjatk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.pjatk.backend.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
