//
//import heartstone.exception.ManaLessException;
//import heartstone.exception.ShamanTotemFullException;
//import heartstone.invoker.SkillInvoker;
//import heartstone.model.Card;
//import heartstone.model.Minion;
//import heartstone.model.Profession;
//import org.junit.Test;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//public class SkillTest {
//    private SkillInvoker skillInvoker;
//    private ProfessionRepository pr;
//    private MinionRepository mr;
//    private WeaponRepository wr;
//
//    @Test
//    public void testAdd2Armor() {
//        Profession war = pr.get("战士");
//
//        war.setCrystal(6);
//        skillInvoker.invoke(war);
//        skillInvoker.invoke(war);
//        skillInvoker.invoke(war);
//
//        assert war.getHealth() == 36;
//        assert war.getArmor() == 6;
//        assert war.getBlood() == 30;
//        assert war.getCurBlood() == 30;
//        assert war.getCurCrystal() == 0;
//    }
//
//    @Test
//    public void testFire() {
//
//        Profession mage = pr.get("法师");
//        Profession war = pr.get("战士");
//
//        mage.setCrystal(3);
//
//        skillInvoker.invoke(mage, war);
//
//        try {
//            skillInvoker.invoke(mage, war);
//        } catch (Exception e) {
//            assert e instanceof ManaLessException;
//        }
//
//        assert mage.getCurCrystal() == 1;
//        assert war.getHealth() == 29;
//    }
//
//    @Test
//    public void testGeneReporter() {
//        Profession paladin = pr.get("圣骑士");
//
//        paladin.setCrystal(8);
//
//        skillInvoker.invoke(paladin);
//        skillInvoker.invoke(paladin);
//        skillInvoker.invoke(paladin);
//        skillInvoker.invoke(paladin);
//
//        assert paladin.getCurCrystal() == 0;
//
//        Minion reporter = mr.get("报告兵");
//        assert paladin.getScene()
//                    .equals(Arrays.asList(reporter, reporter, reporter, reporter));
//    }
//
//    @Test
//    public void testGeneTotem() {
//        Profession shaman = pr.get("萨满");
//
//        shaman.setCrystal(10);
//
//        skillInvoker.invoke(shaman);
//        skillInvoker.invoke(shaman);
//        skillInvoker.invoke(shaman);
//        skillInvoker.invoke(shaman);
//
//        try {
//            skillInvoker.invoke(shaman);
//        } catch (Exception e) {
//            assert e instanceof ShamanTotemFullException;
//        }
//
//        assert shaman.getCurCrystal() == 2;
//        assert shaman.getScene().size() == 4;
//    }
//
//    @Test
//    public void testHeal() {
//        Profession mushi = pr.get("牧师");
//        mushi.setCrystal(8);
//
//        Minion reporter = mr.get("报告兵");
//        Profession paladin = pr.get("圣骑士");
//
//        paladin.setCurBlood(29);
//        skillInvoker.invoke(mushi, paladin);
//        skillInvoker.invoke(mushi, paladin);
//        assert paladin.getCurBlood() == 30;
//
//        paladin.setCurBlood(23);
//        skillInvoker.invoke(mushi, paladin);
//        assert paladin.getCurBlood() == 25;
//
//        skillInvoker.invoke(mushi, reporter);
//        assert reporter.getCurBlood() == 1;
//    }
//
//    @Test
//    public void testShoot() {
//        Profession hunter = pr.get("猎人");
//        Profession war = pr.get("战士");
//
//        war.setCrystal(3);
//        skillInvoker.invoke(war);
//
//        hunter.setCrystal(7);
//        skillInvoker.invoke(hunter, war);
//        skillInvoker.invoke(hunter, war);
//        skillInvoker.invoke(hunter, war);
//
//        assert war.getHealth() == 26;
//        assert hunter.getCurCrystal() == 1;
//    }
//
//    @Test
//    public void testDrawCard() {
//        Profession shushi = pr.get("术士");
//
//        List<Card> cards = new ArrayList<>();
//
//        for (int i = 0; i < 30; i++) {
//            cards.add(mr.get("淡水鳄"));
//        }
//
//        shushi.setCrystal(3);
//        shushi.setCardLibrary(cards);
//
//        skillInvoker.invoke(shushi);
//
//        assert shushi.getCurCrystal() == 1;
//        assert shushi.getCurBlood() == 28;
//        assert shushi.getHandCard().size() == 1;
//        assert shushi.getCardLibrary().size() == 29;
//    }
//
//    @Test
//    public void testEquipDagger() {
//        Profession zie = pr.get("潜行者");
//        zie.setCrystal(3);
//        skillInvoker.invoke(zie);
//        assert zie.getWeapon().equals(wr.get("匕首"));
//    }
//
//    @Test
//    public void testReshape() {
//        Profession deluyi = pr.get("德鲁伊");
//        deluyi.setCrystal(5);
//        skillInvoker.invoke(deluyi);
//        skillInvoker.invoke(deluyi);
//
//        assert deluyi.getHealth() == 32;
//        assert deluyi.getAttack() == 2;
//        assert deluyi.getCurCrystal() == 1;
//    }
//}
