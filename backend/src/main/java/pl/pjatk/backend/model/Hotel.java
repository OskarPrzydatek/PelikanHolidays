package pl.pjatk.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 64)
    private String name;

    @Column(name = "address", nullable = false, length = 128)
    private String address;

    @Column(name = "stars", scale = 1)
    private float stars;

    @Column(name = "price_per_day", nullable = false, scale = 2)
    private double pricePerDay;

    @Column(name = "description", length = 512)
    private String description;

    public Hotel() {
    }

    public Hotel(Long id, String name, String address, float stars, double pricePerDay, String description) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.pricePerDay = pricePerDay;
        this.description = description;
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

    public double getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
