package pl.pjatk.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import pl.pjatk.backend.model.Transport;
import pl.pjatk.backend.model.TransportType;
import pl.pjatk.backend.repository.TransportRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class TransportRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private TransportRepository repository;

    @Test
    public void testCreateTransport() {
        Transport transport = new Transport();
        transport.setTransportType(TransportType.PLANE);
        transport.setPrice(500);

        Transport savedTransport = repository.save(transport);
        Transport existTransport = entityManager.find(Transport.class, savedTransport.getId());
        assertThat(transport.getId()).isEqualTo(existTransport.getId());
    }
}
