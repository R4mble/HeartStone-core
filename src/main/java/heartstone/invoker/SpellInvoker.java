package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.exception.ManaLessException;
import heartstone.exception.CardNotFoundException;
import heartstone.model.GameCharacter;
import heartstone.model.Profession;
import heartstone.model.Spell;

// 法术释放器
class SpellInvoker {

    static void invoke(Profession src, Spell spell, @Nullable GameCharacter tar)  {

        // 检查水晶
        if (src.getCurCrystal() < spell.getCost()) {
            throw new ManaLessException();
        }

        // 检查手牌
        if (!src.getHandCard().contains(spell)) {
            throw new CardNotFoundException();
        }

        DescInvoker.invoke(spell.getDesc(), src, tar);

        // 移除手牌
        src.getHandCard().remove(spell);
        // 扣除水晶
        src.setCurCrystal(src.getCurCrystal() - spell.getCost());
    }
}
