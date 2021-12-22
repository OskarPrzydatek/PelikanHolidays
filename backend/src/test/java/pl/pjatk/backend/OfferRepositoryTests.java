package pl.pjatk.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import pl.pjatk.backend.model.Offer;
import pl.pjatk.backend.repository.OfferRepository;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class OfferRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private OfferRepository repository;

    @Test
    public void testCreateOffer() {
        Offer offer = new Offer();
        offer.setName("Wakacje");
        offer.setLocation("Grecja");
        offer.setTermFrom(LocalDateTime.of(2021, 7, 10, 12, 0));
        offer.setTermTo(LocalDateTime.of(2021, 7, 20, 12, 0));
        offer.setPrice(2000);

        Offer savedOffer = repository.save(offer);
        Offer existOffer = entityManager.find(Offer.class, savedOffer.getId());
        assertThat(offer.getId()).isEqualTo(existOffer.getId());
    }
}
