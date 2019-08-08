package heartstone.model.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "player")
@Data
public class PlayerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private Integer goldCoin;
}
