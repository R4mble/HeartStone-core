import heartstone.box.Box;
import heartstone.invoker.CardDrawer;
import heartstone.invoker.CardExec;
import heartstone.invoker.SkillInvoker;
import heartstone.model.Card;
import heartstone.model.Minion;
import heartstone.model.Profession;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class MinionTest {
    private SkillInvoker skillInvoker;

    @Test
    public void basic() {
        Profession shaman = Box.getProfession("萨满");
        Profession fashi = Box.getProfession("法师");

        List<Card> cards = new ArrayList<>();
        List<Card> cards2 = new ArrayList<>();

        for (int i = 0; i < 30; i++) {
            cards.add(Box.getMinion("淡水鳄"));
            cards2.add(Box.getMinion("淡水鳄"));
        }

        shaman.setCardLibrary(cards);
        fashi.setCardLibrary(cards2);

        CardDrawer.draw(shaman, 4);
        assert shaman.getCardLibrary().size() == 26;

        CardDrawer.draw(fashi, 4);
        assert fashi.getCardLibrary().size() == 26;
    }

    @Test
    public void testElfArcher() {
        Profession shaman = Box.getProfession("萨满");
        Profession fashi = Box.getProfession("法师");

        Minion elf = Box.getMinion("精灵弓箭手");
        shaman.getHandCard().add(elf);
        shaman.setCrystal(4);
        CardExec.exec(shaman, elf, fashi);

        assert fashi.getCurBlood() == 29;
    }

    @Test
    public void attack() {

    }
}
