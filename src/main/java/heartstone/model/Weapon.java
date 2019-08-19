package heartstone.model;

import lombok.Data;

@Data
public class Weapon implements Card, Cloneable {
    public String name;
    public int attack;
    public int curAttack;
    public int durability;
    public int curDurability;

    public Weapon(String name, int attack, int durability) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
    }

    public void setAttack(int attack) {
        this.attack = attack;
        this.curAttack = attack;
    }

    public void setDurability(int durability) {
        this.durability = durability;
        this.curDurability = durability;
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
