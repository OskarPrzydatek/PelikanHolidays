package pl.pjatk.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "stars")
    private float stars;

    @Column(name = "description")
    private String description;

    @OneToOne(mappedBy = "hotel", fetch = FetchType.LAZY)
    @JsonBackReference(value = "offer_hotel")
    private Offer offer;

    public Hotel() {
    }

    public Hotel(Long id, String name, String address, float stars, String description, Offer offer) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.description = description;
        this.offer = offer;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public float getStars() {
        return stars;
    }

    public void setStars(float stars) {
        this.stars = stars;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }
}
