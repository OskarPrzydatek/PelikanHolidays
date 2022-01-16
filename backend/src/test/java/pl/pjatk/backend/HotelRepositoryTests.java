package pl.pjatk.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import pl.pjatk.backend.model.Hotel;
import pl.pjatk.backend.repository.HotelRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class HotelRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private HotelRepository hotelRepository;

    @Test
    public void testCreateHotel() {
        Hotel hotel = new Hotel();
        hotel.setName("Super hotel");
        hotel.setAddress("ul.Klonowa 3/33, 33-333, Gdansk");
        hotel.setStars(3.5f);
        hotel.setDescription("nice hotel");

        Hotel savedHotel = hotelRepository.save(hotel);
        Hotel existHotel = entityManager.find(Hotel.class, savedHotel.getId());
        assertThat(hotel.getId()).isEqualTo(existHotel.getId());
    }
}
