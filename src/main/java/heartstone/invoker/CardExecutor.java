package heartstone.invoker;

import com.sun.istack.internal.Nullable;
import heartstone.model.Card;
import heartstone.model.GameCharacter;
import heartstone.model.dto.Minion;
import heartstone.model.dto.Profession;
import heartstone.model.dto.Spell;

public class CardExecutor {

    private SpellInvoker spellInvoker;

    private MinionCommander minionCommander;

    public void exec(Profession src, Card card, @Nullable GameCharacter tar) {
        if (card instanceof Minion) {
            minionCommander.send(src, (Minion)card, tar);
        } else if (card instanceof Spell) {
            spellInvoker.invoke(src, (Spell)card, tar);
        }
    }
}
