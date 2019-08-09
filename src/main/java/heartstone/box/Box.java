package heartstone.box;

import heartstone.model.Minion;
import heartstone.model.Weapon;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Wangyl
 * @date 2019/8/9
 */
public class Box {

    private static Map<String, Minion> minions = new HashMap<>();
    private static Map<String, Weapon> weapons = new HashMap<>();

    static {
        minions.put("报告兵", new Minion("报告兵", 1, 1, 1));
        weapons.put("匕首", new Weapon("匕首", 1, 1));
    }

    public static Minion getMinion(String name) {
        return (Minion) minions.get(name).clone();
    }

    public static Weapon getWeapon(String name) {
        return (Weapon) weapons.get(name).clone();
    }
}
