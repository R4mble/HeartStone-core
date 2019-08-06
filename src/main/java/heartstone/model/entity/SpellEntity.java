package heartstone.model.entity;

import heartstone.model.dto.Spell;
import heartstone.model.dto.Weapon;
import lombok.Data;

import javax.persistence.*;


 *
 *
 */
@Entity
@Table(name = "spell")
@Data
public class SpellEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer cost;
    private String profession;
    private String desc;

    public Spell toDTO() {
        return new Spell(name, cost, desc);
    }
}
