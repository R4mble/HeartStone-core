package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.exception.ManaLessException;
import heartstone.exception.CardNotFoundException;
import heartstone.exception.WrongTargetException;
import heartstone.model.GameCharacter;
import heartstone.model.Profession;
import heartstone.model.Spell;

// 法术释放器
class SpellInvoker {

    static void invoke(Profession src, Spell spell, @Nullable GameCharacter tar)  {

        if (src.getCurCrystal() < spell.getCost()) {
            throw new ManaLessException();
        }

        if (!src.getHandCard().contains(spell)) {
            throw new CardNotFoundException();
        }

        DescInvoker.invoke(spell.getDesc(), src, tar);

        src.getHandCard().remove(spell);
        src.setCurCrystal(src.getCurCrystal() - spell.getCost());
    }
}
