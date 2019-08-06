package heartstone.model.entity;

import heartstone.model.dto.Minion;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "minion")
@Data
public class MinionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer cost;
    private Integer attack;
    private Integer blood;
    private String battleCry;
    private String profession;

    public Minion toDTO() {
        return new Minion(name, cost, attack, blood, battleCry);
    }
}
