//
//import heartstone.invoker.CardDrawer;
//import heartstone.invoker.CardExecutor;
//import heartstone.invoker.MinionCmder;
//import heartstone.invoker.SkillInvoker;
//import heartstone.model.Card;
//import heartstone.model.Minion;
//import heartstone.model.Profession;
//import heartstone.model.Spell;
//import org.junit.Test;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//public class BattleTest {
//    private SkillInvoker si;
//    private ProfessionRepository pr;
//    private MinionRepository mr;
//    private WeaponRepository wr;
//    private SpellRepository sr;
//    private CardDrawer cd;
//    private CardExecutor cardExecutor;
//    private MinionCmder mc;
//
//    @Test
//    public void battleBegin() {
//        Profession fashi = pr.get("法师");
//        Profession shengqishi = pr.get("圣骑士");
//
//        List<Card> cards = Arrays.asList(mr.get("淡水鳄"),
//                mr.get("迅猛龙"),mr.get("精灵弓箭手"),
//                mr.get("巫医"),mr.get("闪金镇步兵"),
//                mr.get("工程师学徒"),mr.get("酸性沼泽软泥怪"),
//                mr.get("团队领袖"),mr.get("破碎残阳祭祀"),
//                mr.get("暴风城骑士"),mr.get("机械幼龙技工"),
//                mr.get("食人魔法师"),mr.get("古拉巴什狂暴者"),
//                mr.get("暗鳞治愈者"),mr.get("霜狼督军"));
//
//        List<Card> cards1 = new ArrayList<>(cards);
//        List<Card> cards2 = new ArrayList<>(cards);
//
//
//        Card a = cards1.get(0);
//        Card b = cards2.get(0);
//
//        fashi.setCardLibrary(cards1);
//        shengqishi.setCardLibrary(cards2);
//
//        System.out.println(fashi.getCardLibrary());
//
//        cd.draw(fashi, 3);
//        cd.draw(shengqishi, 4);
//    }
//
//    @Test
//    public void battle0() {
//        Profession fashi = pr.get("法师");
//        Profession shengqishi = pr.get("圣骑士");
//
//        Minion wuyi = mr.get("巫医");
//        Spell luckCoin = sr.get("幸运币");
//
//        fashi.getHandCard().add(wuyi);
//        fashi.getHandCard().add(luckCoin);
//
//        shengqishi.setCurBlood(23);
//        fashi.setCrystal(3);
//
//        // 法师使用巫医
//        cardExecutor.exec(fashi, wuyi, shengqishi);
//        // 法师使用幸运币
//        cardExecutor.exec(fashi, luckCoin, null);
//
//        assert fashi.getCurCrystal() == 3;
//
//        assert shengqishi.getCurBlood() == 25;
//
//        shengqishi.setCrystal(10);
//
//    }
//
//}
