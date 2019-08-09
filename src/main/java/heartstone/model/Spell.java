package heartstone.model;

import lombok.Data;

@Data
public class Spell implements Card , Cloneable{
    private String name;
    private Integer cost;
    private String desc;

    public Spell(String name, Integer cost, String desc) {
        this.name = name;
        this.cost = cost;
        this.desc = desc;
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
