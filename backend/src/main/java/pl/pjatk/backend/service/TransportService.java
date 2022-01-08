package pl.pjatk.backend.service;

import org.springframework.stereotype.Service;
import pl.pjatk.backend.model.Transport;
import pl.pjatk.backend.repository.TransportRepository;

import java.util.List;

@Service
public class TransportService {

    private final TransportRepository repository;

    public TransportService(TransportRepository repository) {
        this.repository = repository;
    }

    public Transport getTransportById(Long id) {
        return repository.findById(id).orElseThrow(RuntimeException::new);
    }

    public List<Transport> getTransports() {
        return repository.findAll();
    }

    public Transport addTransport(Transport transport) {
        return repository.save(transport);
    }

    public boolean existTransportById(Long id) {
        return repository.existsById(id);
    }

    public Transport updateTransportById(Long id, Transport transport) {
        if (existTransportById(id)) {
            return repository.save(transport);
        } else {
            throw new RuntimeException();
        }
    }

    public void deleteTransportById(Long id) {
        if (existTransportById(id)) {
            repository.deleteById(id);
        } else {
            throw new RuntimeException();
        }
    }
}
