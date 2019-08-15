package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.constant.Const;
import heartstone.exception.CardNotFoundException;
import heartstone.exception.ManaLessException;
import heartstone.exception.SceneFullException;
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

        if ("BattleCry".equals(minion.getProperties())) {
            if (minion.getProperties().startsWith("hurt")) {
                Commons.causeDamage(tar, Integer.parseInt(minion.getProperties().substring(4)));
            }
            if (minion.getProperties().startsWith("heal")) {
                Commons.heal(tar, Integer.parseInt(minion.getProperties().substring(4)));
            }
        }

        src.getHandCard().remove(minion);
        src.getScene().add(minion);
        src.setCurCrystal(src.getCurCrystal() - minion.getCost());
    }
}
