package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.model.Card;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;
import heartstone.model.Spell;

/**
 * 使用一张牌
 */
public class CardExec {

    public static boolean exec(Profession src, Card card, @Nullable GameCharacter tar) {
        if (card instanceof Minion) {
            return MinionCmd.send(src, (Minion)card, tar);
        } else if (card instanceof Spell) {
            return SpellInvoker.invoke(src, (Spell)card, tar);
        }
        return false;
    }
}
