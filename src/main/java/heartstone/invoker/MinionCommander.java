package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.constant.Consts;
import heartstone.exception.ManaLessException;
import heartstone.exception.CardNotFoundException;
import heartstone.exception.SceneFullException;
import heartstone.model.GameCharacter;
import heartstone.model.dto.Minion;
import heartstone.model.dto.Profession;
import heartstone.repository.MinionRepository;


// 随从派遣器
public class MinionCommander {

    private MinionRepository mr;

    public void send(Profession src, Minion minion, @Nullable GameCharacter tar) {

        if (src.getCurCrystal() < minion.getCost()) {
            throw new ManaLessException();
        }

        if (!src.getHandCard().contains(minion)) {
            throw new CardNotFoundException();
        }

        if (src.getScene().size() >= Consts.MAX_SCENE) {
            throw new SceneFullException();
        }

        if (minion.getBattleCry() != null) {
            if (minion.getBattleCry().startsWith("hurt")) {
                Commons.causeDamage(tar, Integer.parseInt(minion.getBattleCry().substring(4)));
            }
            if (minion.getBattleCry().startsWith("heal")) {
                Commons.heal(tar, Integer.parseInt(minion.getBattleCry().substring(4)));
            }
        }

        src.getHandCard().remove(minion);
        src.getScene().add(minion);
        src.setCurCrystal(src.getCurCrystal() - minion.getCost());
    }
}
