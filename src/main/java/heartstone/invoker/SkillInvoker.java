package heartstone.invoker;

import heartstone.exception.ManaLessException;
import heartstone.exception.TotemFullException;
import heartstone.model.GameCharacter;
import heartstone.model.Profession;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

// 技能释放器
public class SkillInvoker {

    private Skill skill = new Skill();

    // 不需要指定目标的技能
    public void invoke(Profession src) {
        try {
            Method method = skill.getClass().getMethod(src.getSkill(), Profession.class);

            ManaCost manaCost = method.getAnnotation(ManaCost.class);

            if (src.getCurCrystal() < manaCost.value()) {
                throw new ManaLessException(manaCost.value(), src.getCurCrystal());
            }
            method.invoke(skill, src);

            src.setCurCrystal(src.getCurCrystal() - manaCost.value());

        } catch (IllegalAccessException | NoSuchMethodException e) {
            System.out.println(e);
        } catch (InvocationTargetException e) {
            if (e.getTargetException() instanceof TotemFullException) {
                throw new TotemFullException();
            }
        }
    }

    // 需要指定一个目标的技能
    public void invoke(Profession src, GameCharacter tar) {
        try {
            Method method = skill.getClass().getMethod(src.getSkill(), GameCharacter.class);
            ManaCost manaCost = method.getAnnotation(ManaCost.class);

            if (src.getCurCrystal() < manaCost.value()) {
                throw new ManaLessException(manaCost.value(), src.getCurCrystal());
            }

            method.invoke(skill, tar);

            src.setCurCrystal(src.getCurCrystal() - manaCost.value());

        } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            System.out.println(e);
        }
    }
}
