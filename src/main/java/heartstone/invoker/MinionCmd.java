package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.constant.Const;
import heartstone.exception.CardNotFoundException;
import heartstone.exception.ManaLessException;
import heartstone.exception.SceneFullException;
import heartstone.exception.WrongTargetException;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;

// 随从派遣器
class MinionCmd {

    static void send(Profession src, Minion minion, @Nullable GameCharacter tar) {

        if (src.getCurCrystal() < minion.getCost()) {
            throw new ManaLessException();
        }

        if (!src.getHandCard().contains(minion)) {
            throw new CardNotFoundException();
        }

        if (src.getScene().size() >= Const.MAX_SCENE) {
            throw new SceneFullException();
        }

        if (minion.getProperties().contains("BattleCry")) {
            String[] cry =  minion.getBattleCry().split("_");
            if (cry[1].equals("hero") && tar instanceof Minion) {
                throw new WrongTargetException();
            }

            if (cry[1].equals("minion") && tar instanceof Profession) {
                throw new WrongTargetException();
            }

            if (cry[0].equals("hurt")) {
                Commons.causeDamage(tar, Integer.parseInt(cry[2]));
            }
            if (cry[0].equals("heal")) {
                Commons.heal(tar, Integer.parseInt(cry[2]));
            }
        }

        src.getHandCard().remove(minion);
        src.getScene().add(minion);
        src.setCurCrystal(src.getCurCrystal() - minion.getCost());
    }
}
