package heartstone.invoker;

import heartstone.model.Card;
import heartstone.model.GameCharacter;
import heartstone.model.Minion;
import heartstone.model.Profession;

import java.util.LinkedList;
import java.util.List;

// 公共函数
public class Commons {

    /**
     * 造成伤害的通用函数
     * @param target 目标
     * @param damage 造成伤害数量
     * @return 目标是否死亡: true-死亡
     */
    public static boolean damage(GameCharacter target, int damage) {
        if (target instanceof Profession) {
            Profession t = (Profession)target;
            t.setCurBlood(t.getCurBlood() - damage);
            return t.getCurBlood() < 1;
        } else {
            Minion t = (Minion)target;
            t.setCurBlood(t.getCurBlood() - damage);
            return t.getCurBlood() < 1;
        }
    }

    // 治疗的通用函数
    public static void heal(GameCharacter target, int blood) {
        if (target instanceof Profession) {
            Profession t = (Profession)target;
            if (t.getCurBlood() + blood > t.getBlood()) {
                t.setCurBlood(t.getBlood());
            } else {
                t.setCurBlood(t.getCurBlood() + blood);
            }
        } else if (target instanceof Minion) {
            Minion t = (Minion)target;
            if (t.getCurBlood() + blood > t.getBlood()) {
                t.setCurBlood(t.getBlood());
            } else {
                t.setCurBlood(t.getCurBlood() + blood);
            }
        }
    }

    public static void printHandCard(Profession p) {
        List<Card> cards = p.getHandCard();
        System.out.print(p.getName() + "的手牌是: ");

        for (int i = 0; i < cards.size(); i++) {
            System.out.print(i + 1 + "." + cards.get(i).getName() + " ");
        }

        System.out.println();
    }

    public static void printScene(Profession p) {
        List<Minion> cards = p.getScene();
        System.out.print(p.getName() + "的场面是: ");

        for (int i = 0; i < cards.size(); i++) {
            System.out.print(i + 1 + "." + cards.get(i).getName() + " ");
        }

        System.out.println();
    }
}
