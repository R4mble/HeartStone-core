package heartstone.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Minion implements Card, GameCharacter, Cloneable {
    private String name;
    private int cost;
    private int curCost;
    private int attack;
    private int curAttack;
    private int blood;
    private int curBlood;
    private String properties;
    private String profession;

    public Minion(String name, Integer cost, Integer attack, Integer blood) {
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.blood = blood;
    }

    @Override
    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return null;
    }
}
