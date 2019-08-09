package heartstone.box;

import com.fasterxml.jackson.databind.ObjectMapper;
import heartstone.model.Minion;
import heartstone.model.Profession;
import heartstone.model.Weapon;

import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * @author Wangyl
 * @date 2019/8/9
 */
public class Box {

    private static ObjectMapper mapper = new ObjectMapper();
    private static Map<String, Minion> minions = new HashMap<>();
    private static Map<String, Weapon> weapons = new HashMap<>();
    private static Map<String, Profession> professions = new HashMap<>();
    private static String filePrefix = "C:/Users/Ramble/Desktop/MyGitHub/HeartStone-core/src/main/resources/";
    private static String fileSuffix = ".json";

    static {
        weapons.put("匕首", new Weapon("匕首", 1, 1));

        read("minion", minions, Minion.class);
        read("profession", professions, Profession.class);
    }

    private static void read(String fileName, Map map, Class c) {
        File file = new File(filePrefix + fileName + fileSuffix);
        try {
            List list = mapper.readValue(file, List.class);
            for (Object o1 : list) {
                Map o = (Map) o1;
                Object t = null;
                if (c == Profession.class) {
                    t = c.getConstructor(String.class, String.class).newInstance(
                            o.get("name").toString(), o.get("skill").toString());
                } else if (c == Minion.class) {
                    t = c.getConstructor(String.class, Integer.class, Integer.class, Integer.class).newInstance(
                            o.get("name").toString(), Integer.valueOf(o.get("cost").toString()), Integer.valueOf(o.get("attack").toString()),
                            Integer.valueOf(o.get("blood").toString()));
                }

                map.put(o.get("name").toString(), t);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Minion getMinion(String name) {
        return (Minion) minions.get(name).clone();
    }

    public static Weapon getWeapon(String name) {
        return (Weapon) weapons.get(name).clone();
    }

    public static Profession getProfession(String name) {
        return (Profession) professions.get(name).clone();
    }
}
