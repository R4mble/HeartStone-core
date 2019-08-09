package heartstone.invoker;

import heartstone.box.Box;
import heartstone.exception.ShamanTotemFullException;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import static heartstone.invoker.Commons.causeDamage;

// 九职业技能
public class Skill {

    private CardDrawer cd;

    @ManaCost(value = 2, desc = "战士技能")
    public void add2Armor(Profession src) {
        src.setArmor(src.getArmor() + 2);
    }

    @ManaCost(value = 2, desc = "德鲁伊技能")
    public void reshape(Profession src) {
        src.setArmor(src.getArmor() + 1);
        src.setAttack(src.getAttack() + 1);
    }

    @ManaCost(value = 2, desc = "圣骑士技能")
    public void geneReporter(Profession src) {
        List<Minion> scene = src.getScene();
        scene.add(Box.getMinion("报告兵"));
        src.setScene(scene);
    }

    @ManaCost(value = 2, desc = "法师技能")
    public void fire(GameCharacter tar) {
        causeDamage(tar, 1);
    }

    @ManaCost(value = 2, desc = "猎人技能")
    public void shoot(GameCharacter tar) {
        causeDamage(tar, 2);
    }

    @ManaCost(value = 2, desc = "牧师技能")
    public void heal(GameCharacter tar) {
        Commons.heal(tar, 2);
    }

    @ManaCost(value = 2, desc = "潜行者技能")
    public void equipDagger(Profession src) {
        src.setWeapon(Box.getWeapon("匕首"));
    }

    @ManaCost(value = 2, desc = "术士技能")
    public void drawCard(Profession src) {
        causeDamage(src, 2);
        cd.draw(src, 1);
    }

    @ManaCost(value = 2, desc = "萨满技能")
    public void geneTotem(Profession src) throws ShamanTotemFullException {

        List<Minion> scene = src.getScene();

        List<Minion> basicTotems = Arrays.asList(
                Box.getMinion("灼热图腾"),
                Box.getMinion("法强图腾"),
                Box.getMinion("治疗图腾"),
                Box.getMinion("嘲讽图腾")
        );

        List<Minion> availableTotems = new ArrayList<>();

        basicTotems.forEach(t -> {
            if (!scene.contains(t)) {
                availableTotems.add(t);
            }
        });

        if (availableTotems.size() == 0) {
            throw new ShamanTotemFullException();
        }

        int randomIndex = new Random().nextInt(availableTotems.size());

        scene.add(availableTotems.get(randomIndex));
        src.setScene(scene);
    }
}
