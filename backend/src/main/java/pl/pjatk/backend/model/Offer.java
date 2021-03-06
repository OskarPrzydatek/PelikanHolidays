package pl.pjatk.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "term_from")
    private LocalDateTime termFrom;

    @Column(name = "term_to")
    private LocalDateTime termTo;

    @Column(name = "price")
    private double price;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    @JsonManagedReference(value = "offer_hotel")
    private Hotel hotel;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "transport_id", referencedColumnName = "id")
    @JsonManagedReference(value = "offer_transport")
    private Transport transport;

    @OneToMany(mappedBy = "offer", cascade = CascadeType.MERGE)
    @JsonManagedReference(value = "offer_attraction")
    private List<TouristAttraction> attractions;

    public Offer() {
    }

    public Offer(Long id, String name, String location, LocalDateTime termFrom,
                 LocalDateTime termTo, double price, Hotel hotel,
                 Transport transport, List<TouristAttraction> attractions) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.termFrom = termFrom;
        this.termTo = termTo;
        this.price = price;
        this.hotel = hotel;
        this.transport = transport;
        this.attractions = attractions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDateTime getTermFrom() {
        return termFrom;
    }

    public void setTermFrom(LocalDateTime termFrom) {
        this.termFrom = termFrom;
    }

    public LocalDateTime getTermTo() {
        return termTo;
    }

    public void setTermTo(LocalDateTime termTo) {
        this.termTo = termTo;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    public List<TouristAttraction> getAttractions() {
        return attractions;
    }

    public void setAttractions(List<TouristAttraction> attractions) {
        this.attractions = attractions;
    }
}
