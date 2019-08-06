import heartstone.invoker.SkillInvoker;
import heartstone.invoker.SpellInvoker;
import heartstone.model.dto.Profession;
import heartstone.model.dto.Spell;
import heartstone.repository.MinionRepository;
import heartstone.repository.ProfessionRepository;
import heartstone.repository.SpellRepository;
import heartstone.repository.WeaponRepository;
import org.junit.Test;
import org.junit.runner.RunWith;

public class SpellTest {
    private SkillInvoker skillInvoker;
    private SpellInvoker spellInvoker;
    private ProfessionRepository pr;
    private MinionRepository mr;
    private WeaponRepository wr;
    private SpellRepository sr;

    @Test
    public void testLuckyCoin() {
        Profession shaman = pr.findByName("萨满").toDTO();

        Spell luckyCoin = sr.findByName("luckyCoin").toDTO();

        spellInvoker.invoke(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 1;

        spellInvoker.invoke(shaman, luckyCoin, null);
        spellInvoker.invoke(shaman, luckyCoin, null);
        spellInvoker.invoke(shaman, luckyCoin, null);

        assert shaman.getCurCrystal() == 4;
    }

    @Test
    public void testFireBall() {
        Profession zie = pr.findByName("潜行者").toDTO();
        Profession fashi = pr.findByName("法师").toDTO();

        Spell fireBall = sr.findByName("fireBall").toDTO();

        zie.setCrystal(6);

        spellInvoker.invoke(zie, fireBall, fashi);

        assert zie.getCurCrystal() == 2;
        assert fashi.getCurBlood() == 24;
    }

    @Test
    public void test() {


    }


}
