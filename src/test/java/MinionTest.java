//
//import heartstone.invoker.CardDrawer;
//import heartstone.invoker.CardExecutor;
//import heartstone.invoker.SkillInvoker;
//import heartstone.model.Card;
//import heartstone.model.Minion;
//import heartstone.model.Profession;
//import org.junit.Test;
//
//
//
//
//import java.util.ArrayList;
//import java.util.List;
//
//public class MinionTest {
//    private SkillInvoker skillInvoker;
//    private ProfessionRepository pr;
//    private MinionRepository mr;
//    private WeaponRepository wr;
//    private CardDrawer cardDrawer;
//    private CardExecutor cardExecutor;
//
//    @Test
//    public void basic() {
//        Profession shaman = pr.get("萨满");
//        Profession fashi = pr.get("法师");
//
//        List<Card> cards = new ArrayList<>();
//        List<Card> cards2 = new ArrayList<>();
//
//        for (int i = 0; i < 30; i++) {
//            cards.add(mr.get("淡水鳄"));
//            cards2.add(mr.get("淡水鳄"));
//        }
//
//        shaman.setCardLibrary(cards);
//        fashi.setCardLibrary(cards2);
//
//        cardDrawer.draw(shaman, 4);
//        assert shaman.getCardLibrary().size() == 26;
//
//        cardDrawer.draw(fashi, 4);
//        assert fashi.getCardLibrary().size() == 26;
//    }
//
//    @Test
//    public void testElfArcher() {
//        Profession shaman = pr.get("萨满");
//        Profession fashi = pr.get("法师");
//
//        Minion m = mr.get("精灵弓箭手");
//
//        shaman.getHandCard().add(m);
//
//        shaman.setCrystal(4);
//
//
//        cardExecutor.exec(shaman, m, fashi);
//
//        assert fashi.getCurBlood() == 29;
//    }
//
//    public void attack() {
//
//    }
//}
