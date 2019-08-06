package heartstone.model.dto;

import heartstone.model.Card;
import lombok.Data;

@Data
public class Spell implements Card {
    private String name;
    private Integer cost;
    private String desc;

    public Spell(String name, Integer cost, String desc) {
        this.name = name;
        this.cost = cost;
        this.desc = desc;
    }
}
