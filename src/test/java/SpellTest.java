//import heartstone.invoker.SkillInvoker;
//import heartstone.invoker.SpellInvoker;
//import heartstone.model.Profession;
//import heartstone.model.Spell;
//import org.junit.Test;
//
//public class SpellTest {
//    private SkillInvoker skillInvoker;
//    private SpellInvoker spellInvoker;
//    private ProfessionRepository pr;
//    private MinionRepository mr;
//    private WeaponRepository wr;
//    private SpellRepository sr;
//
//    @Test
//    public void testLuckyCoin() {
//        Profession shaman = pr.get("萨满");
//
//        Spell luckyCoin = sr.get("luckyCoin");
//
//        spellInvoker.invoke(shaman, luckyCoin, null);
//
//        assert shaman.getCurCrystal() == 1;
//
//        spellInvoker.invoke(shaman, luckyCoin, null);
//        spellInvoker.invoke(shaman, luckyCoin, null);
//        spellInvoker.invoke(shaman, luckyCoin, null);
//
//        assert shaman.getCurCrystal() == 4;
//    }
//
//    @Test
//    public void testFireBall() {
//        Profession zie = pr.get("潜行者");
//        Profession fashi = pr.get("法师");
//
//        Spell fireBall = sr.get("fireBall");
//
//        zie.setCrystal(6);
//
//        spellInvoker.invoke(zie, fireBall, fashi);
//
//        assert zie.getCurCrystal() == 2;
//        assert fashi.getCurBlood() == 24;
//    }
//
//    @Test
//    public void test() {
//
//
//    }
//
//
//}
