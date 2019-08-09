package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.model.Card;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;
import heartstone.model.Spell;

public class CardExecutor {

    private static SpellInvoker spellInvoker;

    private static MinionCmder minionCommander;

    public static void exec(Profession src, Card card, @Nullable GameCharacter tar) {
        if (card instanceof Minion) {
            minionCommander.send(src, (Minion)card, tar);
        } else if (card instanceof Spell) {
            spellInvoker.invoke(src, (Spell)card, tar);
        }
    }
}
