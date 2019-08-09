package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.exception.ManaLessException;
import heartstone.exception.CardNotFoundException;
import heartstone.exception.WrongTargetException;
import heartstone.model.GameCharacter;
import heartstone.model.Profession;
import heartstone.model.Spell;

// 法术释放器
public class SpellInvoker {

    public void invoke(Profession src, Spell spell, @Nullable GameCharacter tar)  {

        if (src.getCurCrystal() < spell.getCost()) {
            throw new ManaLessException();
        }

        if (!src.getHandCard().contains(spell)) {
            throw new CardNotFoundException();
        }

        String desc = spell.getDesc();

        if (desc.startsWith("addCurCrystal")) {
            src.setCurCrystal(src.getCurCrystal() +
                    Integer.parseInt(desc.substring("addCurCrystal".length())));
        } else if (desc.startsWith("hurtMinion")) {
            if (tar instanceof Profession) {
                throw new WrongTargetException();
            }
            Commons.causeDamage(tar, Integer.parseInt(desc.substring("hurtMinion".length())));
        } else if (desc.startsWith("hurt")) {
            Commons.causeDamage(tar, Integer.parseInt(desc.substring("hurt".length())));
        }

        src.getHandCard().remove(spell);
        src.setCurCrystal(src.getCurCrystal() - spell.getCost());
    }
}
