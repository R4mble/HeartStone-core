package heartstone.model;

import lombok.Data;
import java.util.LinkedList;
import java.util.List;

@Data
public class Profession implements GameCharacter, Cloneable {
    private String name;
    private String skill;
    private Weapon weapon;
    private int attack;
    private int blood = 30;
    private int curBlood = 30;
    // 护甲
    private int armor;
    private int crystal;
    private int curCrystal;
    // 法术伤害
    private int mageDamage;
    private List<Card> handCard = new LinkedList<>();
    private List<Minion> scene = new LinkedList<>();
    private List<Card> cardLibrary = new LinkedList<>();

    public Profession(String name, String skill) {
        this.name = name;
        this.skill = skill;
    }

    public void setCrystal(int cry) {
        crystal = cry;
        curCrystal = cry;
    }

    public int getHealth() {
        return curBlood + armor;
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
