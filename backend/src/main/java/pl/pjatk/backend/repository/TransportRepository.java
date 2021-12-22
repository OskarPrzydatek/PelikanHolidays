package pl.pjatk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.pjatk.backend.model.Transport;

public interface TransportRepository extends JpaRepository<Transport, Long> {
}
