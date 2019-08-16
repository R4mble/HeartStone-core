package heartstone.invoker;

import heartstone.exception.TargetWrongException;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;

/**
 * @author Wangyl
 * @date 2019/8/16
 */
public class DescInvoker {

    public static void invoke(String desc, Profession src, GameCharacter tar) {
        String[] cry =  desc.split("_");

        // 检查目标
        if ((cry[1].equals("hero") && tar instanceof Minion)
         || (cry[1].equals("minion") && tar instanceof Profession)) {
            throw new TargetWrongException();
        }

        if (cry[0].equals("hurt")) {
            Commons.damage(tar, Integer.parseInt(cry[2]));
        }
        if (cry[0].equals("heal")) {
            Commons.heal(tar, Integer.parseInt(cry[2]));
        }
        if (cry[0].equals("addCurCrystal")) {
            if (cry[1].equals("self")) {
                src.setCurCrystal(src.getCurCrystal() + Integer.parseInt(cry[2]));
            }
        }
    }
}
