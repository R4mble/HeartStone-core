import heartstone.box.Box;
import heartstone.invoker.CardExec;
import heartstone.invoker.SkillInvoker;
import heartstone.model.Profession;
import heartstone.model.Spell;
import org.junit.Test;

import java.util.Arrays;

public class SpellTest {
    private SkillInvoker skillInvoker;

    @Test
    public void testLuckyCoin() {
        Profession shaman = Box.getProfession("萨满");
        Spell luckyCoin = Box.getSpell("幸运币");
        shaman.getHandCard().addAll(Arrays.asList(luckyCoin, luckyCoin, luckyCoin, luckyCoin));

        CardExec.exec(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 1;

        CardExec.exec(shaman, luckyCoin, null);
        CardExec.exec(shaman, luckyCoin, null);
        CardExec.exec(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 4;
    }

    @Test
    public void testFireBall() {
        Profession zie = Box.getProfession("潜行者");
        Profession fashi = Box.getProfession("法师");

        Spell fireBall = Box.getSpell("火球术");
        zie.getHandCard().add(fireBall);

        zie.setCrystal(6);

        CardExec.exec(zie, fireBall, fashi);

        assert zie.getCurCrystal() == 2;
        assert fashi.getCurBlood() == 24;
    }

    @Test
    public void test() {


    }


}
