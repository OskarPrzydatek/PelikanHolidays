package pl.pjatk.backend.model;

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

    @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
    private List<Hotel> hotels;

    @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
    private List<Transport> transports;

    @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
    private List<TouristAttraction> attractions;

    public Offer() {
    }

    public Offer(Long id, String name, String location, LocalDateTime termFrom,
                 LocalDateTime termTo, double price, List<Hotel> hotels,
                 List<Transport> transports, List<TouristAttraction> attractions) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.termFrom = termFrom;
        this.termTo = termTo;
        this.price = price;
        this.hotels = hotels;
        this.transports = transports;
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

    public List<Hotel> getHotels() {
        return hotels;
    }

    public void setHotels(List<Hotel> hotels) {
        this.hotels = hotels;
    }

    public List<Transport> getTransports() {
        return transports;
    }

    public void setTransports(List<Transport> transports) {
        this.transports = transports;
    }

    public List<TouristAttraction> getAttractions() {
        return attractions;
    }

    public void setAttractions(List<TouristAttraction> attractions) {
        this.attractions = attractions;
    }
}
