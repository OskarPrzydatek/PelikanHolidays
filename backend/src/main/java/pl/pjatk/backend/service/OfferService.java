package pl.pjatk.backend.service;

import org.springframework.stereotype.Service;
import pl.pjatk.backend.model.Offer;
import pl.pjatk.backend.repository.OfferRepository;

import java.util.List;

@Service
public class OfferService {

    private final OfferRepository repository;

    public OfferService(OfferRepository repository) {
        this.repository = repository;
    }

    public Offer getOfferById(Long id) {
        return repository.findById(id).orElseThrow(RuntimeException::new);
    }

    public List<Offer> getOffers() {
        return repository.findAll();
    }

    public Offer addOffer(Offer offer) {
        return repository.save(offer);
    }

    public boolean existsOfferById(Long id) {
        return repository.existsById(id);
    }

    public Offer updateOfferById(Long id, Offer offer) {
        if (existsOfferById(id)) {
            return repository.save(offer);
        } else {
            throw new RuntimeException();
        }
    }

    public void deleteOfferById(Long id) {
        if (existsOfferById(id)) {
            repository.deleteById(id);
        } else {
            throw new RuntimeException();
        }
    }
}
