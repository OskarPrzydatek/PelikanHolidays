package pl.pjatk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.pjatk.backend.model.TouristAttraction;

public interface TouristAttractionRepository extends JpaRepository<TouristAttraction, Long> {
}
