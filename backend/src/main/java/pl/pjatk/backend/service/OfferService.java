package pl.pjatk.backend.service;

import org.springframework.stereotype.Service;
import pl.pjatk.backend.model.Hotel;
import pl.pjatk.backend.model.Offer;
import pl.pjatk.backend.model.TouristAttraction;
import pl.pjatk.backend.model.Transport;
import pl.pjatk.backend.repository.OfferRepository;
import pl.pjatk.backend.repository.TouristAttractionRepository;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
public class OfferService {

    private final OfferRepository repository;
    private final EntityManager entityManager;
    private final TouristAttractionRepository attractionRepository;

    public OfferService(OfferRepository repository, EntityManager entityManager,
                        TouristAttractionRepository attractionRepository) {
        this.repository = repository;
        this.entityManager = entityManager;
        this.attractionRepository = attractionRepository;
    }

    public Offer getOfferById(Long id) {
        return repository.findById(id).orElseThrow(RuntimeException::new);
    }

    public List<Offer> getOffers() {
        return repository.findAll();
    }

    public Offer addOffer(Offer offer) {
        if (offer.getHotel() != null) {
            var id = offer.getHotel().getId();
            var hotel = entityManager.find(Hotel.class, id);
            offer.setHotel(hotel);
        }

        if (offer.getTransport() != null) {
            var id = offer.getTransport().getId();
            var transport = entityManager.find(Transport.class, id);
            offer.setTransport(transport);
        }

        if (offer.getAttractions() != null) {
            repository.save(offer);
            List<TouristAttraction> attractions = new ArrayList<>();
            for (TouristAttraction attraction : offer.getAttractions()) {
                var id = attraction.getId();
                var touristAttraction = entityManager.find(TouristAttraction.class, id);
                touristAttraction.setOffer(offer);
                attractionRepository.save(touristAttraction);
                attractions.add(touristAttraction);
            }
            offer.setAttractions(attractions);
        } else {
            return repository.save(offer);
        }

        return offer;
    }

    public boolean existsOfferById(Long id) {
        return repository.existsById(id);
    }

    public Offer updateOfferById(Long offerId, Offer offer) {
        if (existsOfferById(offerId)) {
            if (offer.getHotel() != null) {
                var id = offer.getHotel().getId();
                var hotel = entityManager.find(Hotel.class, id);
                offer.setHotel(hotel);
            }

            if (offer.getTransport() != null) {
                var id = offer.getTransport().getId();
                var transport = entityManager.find(Transport.class, id);
                offer.setTransport(transport);
            }

            //clear offer foreign keys for given id for TouristAttraction entity in db
            var att = attractionRepository.findAll();
            for (TouristAttraction a : att) {
                if (a.getOffer() != null) {
                    if (a.getOffer().getId().equals(offerId)) {
                        a.setOffer(null);
                        attractionRepository.save(a);
                    }
                }
            }

            if (offer.getAttractions() != null) {
                List<TouristAttraction> attractions = new ArrayList<>();
                for (TouristAttraction attraction : offer.getAttractions()) {
                    var id = attraction.getId();
                    var touristAttraction = entityManager.find(TouristAttraction.class, id);
                    touristAttraction.setOffer(offer);
                    attractionRepository.save(touristAttraction);
                    attractions.add(touristAttraction);
                }
                offer.setAttractions(attractions);
            } else {
                return repository.save(offer);
            }
        } else {
            throw new RuntimeException();
        }
        return repository.save(offer);
    }

    public void deleteOfferById(Long id) {
        if (existsOfferById(id)) {
            repository.deleteById(id);
        } else {
            throw new RuntimeException();
        }
    }
}
