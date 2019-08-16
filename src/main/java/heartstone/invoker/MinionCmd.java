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

import java.util.Properties;

// 随从派遣器
class MinionCmd {

    static void send(Profession src, Minion minion, @Nullable GameCharacter tar) {

        // 检查水晶
        if (src.getCurCrystal() < minion.getCost()) {
            throw new ManaLessException();
        }

        // 检查手牌
        if (!src.getHandCard().contains(minion)) {
            throw new CardNotFoundException();
        }

        // 检查场面
        if (src.getScene().size() >= Const.MAX_SCENE) {
            throw new SceneFullException();
        }

        // 执行战吼
        if (PropertyChecker.check(minion.getProperties()).contains("战吼")) {
            DescInvoker.invoke(minion.getBattleCry(), src, tar);
        }

        // 移除手牌
        src.getHandCard().remove(minion);
        // 场面新增随从
        src.getScene().add(minion);
        // 扣除水晶
        src.setCurCrystal(src.getCurCrystal() - minion.getCost());
    }
}
