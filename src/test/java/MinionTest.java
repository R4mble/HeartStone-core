
import heartstone.invoker.CardDrawer;
import heartstone.invoker.CardExecutor;
import heartstone.invoker.SkillInvoker;
import heartstone.model.Card;
import heartstone.model.dto.Minion;
import heartstone.model.dto.Profession;
import heartstone.repository.MinionRepository;
import heartstone.repository.ProfessionRepository;
import heartstone.repository.WeaponRepository;
import org.junit.Test;




import java.util.ArrayList;
import java.util.List;

public class MinionTest {
    private SkillInvoker skillInvoker;
    private ProfessionRepository pr;
    private MinionRepository mr;
    private WeaponRepository wr;
    private CardDrawer cardDrawer;
    private CardExecutor cardExecutor;

    @Test
    public void basic() {
        Profession shaman = pr.findByName("萨满").toDTO();
        Profession fashi = pr.findByName("法师").toDTO();

        List<Card> cards = new ArrayList<>();
        List<Card> cards2 = new ArrayList<>();

        for (int i = 0; i < 30; i++) {
            cards.add(mr.findByName("淡水鳄").toDTO());
            cards2.add(mr.findByName("淡水鳄").toDTO());
        }

        shaman.setCardLibrary(cards);
        fashi.setCardLibrary(cards2);

        cardDrawer.draw(shaman, 4);
        assert shaman.getCardLibrary().size() == 26;

        cardDrawer.draw(fashi, 4);
        assert fashi.getCardLibrary().size() == 26;
    }

    @Test
    public void testElfArcher() {
        Profession shaman = pr.findByName("萨满").toDTO();
        Profession fashi = pr.findByName("法师").toDTO();

        Minion m = mr.findByName("精灵弓箭手").toDTO();

        shaman.getHandCard().add(m);

        shaman.setCrystal(4);


        cardExecutor.exec(shaman, m, fashi);

        assert fashi.getCurBlood() == 29;
    }

    public void attack() {

    }
}
