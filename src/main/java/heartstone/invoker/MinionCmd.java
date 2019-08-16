package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.constant.Const;
import heartstone.exception.*;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;

// 随从派遣器
public class MinionCmd {

    static void send(Profession src, Minion minion, @Nullable GameCharacter tar) {
        // 检查水晶
        if (src.getCurCrystal() < minion.getCost()) {
            throw new ManaLessException();
        }

        // 检查手牌
        if (!src.getHandCard().contains(minion)) {
            throw new CardNotFoundException();
        }

        // 检查场上随从数量
        if (src.getScene().size() >= Const.MAX_SCENE) {
            throw new SceneFullException();
        }

        if (minion.getProperties() != null) {
            // 执行战吼
            if (PropertyChecker.read(minion.getProperties()).contains("战吼")) {
                DescInvoker.invoke(minion.getBattleCry(), src, tar);
            }
        }

        // 移除手牌
        src.getHandCard().remove(minion);
        // 场面新增随从
        src.getScene().add(minion);
        // 扣除水晶
        src.setCurCrystal(src.getCurCrystal() - minion.getCost());
    }

    public static void attack(Profession src, Minion minion, GameCharacter tar, Profession opponent) {
        // 检查场上是否存在该随从
        if (!src.getScene().contains(minion)) {
            throw new TargetWrongException();
        }

        // 检查随从攻击力
        if (minion.getCurAttack() < 1) {
            throw new ZeroAttackException();
        }

        boolean tarAlive = Commons.damage(tar, minion.getCurAttack());
        if (!tarAlive) {
            opponent.getScene().remove(tar);
        }

        int targetAttack;
        if (tar instanceof Profession) {
            Profession p = (Profession)tar;
            targetAttack = p.getAttack();
        } else {
            Minion m = (Minion)tar;
            targetAttack = m.getCurAttack();
        }

        boolean minionAlive = Commons.damage(minion, targetAttack);

    }
}
