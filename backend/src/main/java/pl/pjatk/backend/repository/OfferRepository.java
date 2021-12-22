package pl.pjatk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.pjatk.backend.model.Offer;

public interface OfferRepository extends JpaRepository<Offer, Long> {
}
