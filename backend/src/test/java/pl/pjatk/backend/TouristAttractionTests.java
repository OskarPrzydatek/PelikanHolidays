package pl.pjatk.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import pl.pjatk.backend.model.TouristAttraction;
import pl.pjatk.backend.repository.TouristAttractionRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class TouristAttractionTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private TouristAttractionRepository repository;

    @Test
    public void testCreateTouristAttraction() {
        TouristAttraction attraction = new TouristAttraction();
        attraction.setName("Wycieczka na safari");
        attraction.setPrice(84d);
        attraction.setDescription("super wycieczka");

        TouristAttraction savedAttraction = repository.save(attraction);
        TouristAttraction existAttraction = entityManager.find(TouristAttraction.class, savedAttraction.getId());
        assertThat(attraction.getId()).isEqualTo(existAttraction.getId());
    }
}
