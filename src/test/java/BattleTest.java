import heartstone.box.Box;
import heartstone.invoker.CardDrawer;
import heartstone.invoker.CardExec;
import heartstone.invoker.MinionCmd;
import heartstone.model.Card;
import heartstone.model.Minion;
import heartstone.model.Profession;
import heartstone.model.Spell;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BattleTest {

    @Test
    public void battleBegin() {
        Profession fashi = Box.getProfession("法师");
        Profession shengqishi = Box.getProfession("圣骑士");

        List<Card> cards = Arrays.asList(Box.getMinion("淡水鳄"),
                Box.getMinion("迅猛龙"),Box.getMinion("精灵弓箭手"),
                Box.getMinion("巫医"),Box.getMinion("闪金镇步兵"),
                Box.getMinion("工程师学徒"),Box.getMinion("酸性沼泽软泥怪"),
                Box.getMinion("团队领袖"),Box.getMinion("破碎残阳祭祀"),
                Box.getMinion("暴风城骑士"),Box.getMinion("机械幼龙技工"),
                Box.getMinion("食人魔法师"),Box.getMinion("古拉巴什狂暴者"),
                Box.getMinion("暗鳞治愈者"),Box.getMinion("霜狼督军"));

        List<Card> cards1 = new ArrayList<>(cards);
        List<Card> cards2 = new ArrayList<>(cards);


        Card a = cards1.get(0);
        Card b = cards2.get(0);

        fashi.setCardLibrary(cards1);
        shengqishi.setCardLibrary(cards2);

        System.out.println(fashi.getCardLibrary());

        CardDrawer.draw(fashi, 3);
        CardDrawer.draw(shengqishi, 4);
    }

    @Test
    public void battle0() {
        Profession fashi = Box.getProfession("法师");
        Profession shengqishi = Box.getProfession("圣骑士");

        Minion wuyi = Box.getMinion("巫医");
        Spell luckCoin = Box.getSpell("幸运币");

        fashi.getHandCard().add(wuyi);
        fashi.getHandCard().add(luckCoin);

        shengqishi.setCurBlood(23);
        fashi.setCrystal(3);

        // 法师对圣骑士使用巫医
        CardExec.exec(fashi, wuyi, shengqishi);
        // 法师使用幸运币
        CardExec.exec(fashi, luckCoin, null);

        assert fashi.getCurCrystal() == 3;

        assert shengqishi.getCurBlood() == 25;

        shengqishi.setCrystal(10);
    }

    @Test
    public void attack() {
        Profession fashi = Box.getProfession("法师");
        Profession shengqishi = Box.getProfession("圣骑士");

        Minion wuyi1 = Box.getMinion("巫医");
        Minion wuyi2 = Box.getMinion("巫医");

        fashi.getScene().add(wuyi1);
        shengqishi.getScene().add(wuyi2);

        MinionCmd.attack(fashi, wuyi1, wuyi2);


    }

}
