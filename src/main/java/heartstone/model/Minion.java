package heartstone.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    // 种族: 鱼人, 野兽, 元素, 图腾
    private String race;
    // 属性: 嘲讽, 吸血, 风怒, 突袭, 冲锋, 战吼, 亡语, 圣盾, 复生
    private List<String> properties;

    /**
     *  战吼内容: action_object_opcode
     *       eg: hurt_hero_3 heal_minion_4
     *           aoe_enemyMinion_4 aoe_selfMinion_1 aoe_allMinion_3
     *
     */

    private String battleCry;
    private String profession = "all";

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
