import heartstone.box.Box;
import heartstone.invoker.SkillInvoker;
import heartstone.invoker.SpellInvoker;
import heartstone.model.Profession;
import heartstone.model.Spell;
import org.junit.Test;

public class SpellTest {
    private SkillInvoker skillInvoker;
    private SpellInvoker spellInvoker;

    @Test
    public void testLuckyCoin() {
        Profession shaman = Box.getProfession("萨满");

        Spell luckyCoin = Box.getSpell("luckyCoin");

        SpellInvoker.invoke(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 1;

        SpellInvoker.invoke(shaman, luckyCoin, null);
        SpellInvoker.invoke(shaman, luckyCoin, null);
        SpellInvoker.invoke(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 4;
    }

    @Test
    public void testFireBall() {
        Profession zie = Box.getProfession("潜行者");
        Profession fashi = Box.getProfession("法师");

        Spell fireBall = Box.getSpell("fireBall");

        zie.setCrystal(6);

        SpellInvoker.invoke(zie, fireBall, fashi);

        assert zie.getCurCrystal() == 2;
        assert fashi.getCurBlood() == 24;
    }

    @Test
    public void test() {


    }


}
