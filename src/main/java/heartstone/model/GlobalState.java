package heartstone.model;

import heartstone.box.Box;
import heartstone.invoker.CardDrawer;
import heartstone.invoker.CardExec;
import heartstone.invoker.Commons;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class GlobalState {

    public static void main(String[] args) {

        List<Card> cards = new ArrayList<>();
        Box.minions.forEach((k, m) -> {
            if (m.getCost() > 1) {
                cards.add(m);
                cards.add((Card)m.clone());
            }
        });

        List<Card> cards2 = new ArrayList<>();
        for (Card c : cards) {
            cards2.add((Card)((Minion)c).clone());
        }
        Collections.shuffle(cards);
        Collections.shuffle(cards2);

        Profession shushi = Box.getProfession("术士");
        shushi.setCardLibrary(cards);

        Profession saman = Box.getProfession("萨满");
        saman.setCardLibrary(cards2);

        gaming(shushi, saman);
    }

    private static int gaming(Profession A, Profession B) {

        CardDrawer.draw(A, 3);
        CardDrawer.draw(B, 4);
        B.getHandCard().add(Box.getSpell("幸运币"));

        // 轮到谁: 1-A, 2-B
        int turn = 1;
        // 回合数
        int crystal = 1;
        // 回合数
        int round = 1;

        while (A.isAlive() && B.isAlive()) {
            Profession cur;
            Profession enemy;

            if (turn == 1) {
                cur = A;
                enemy = B;
            } else  {
                cur = B;
                enemy = A;
            }

            System.out.println("========当前是第" + round + "回合," + cur.getName() + "出牌=========");
            cur.setCrystal(crystal);

            CardDrawer.draw(cur, 1);
            Commons.printHandCard(cur);

            boolean flag = false;
            while (!flag) {
                System.out.println("请出牌(0 - 结束回合): ");
                Scanner sc = new Scanner(System.in);
                int cardIndex = sc.nextInt();
                if (cardIndex == 0) {
                    System.out.println("你的回合结束~\n\n");
                    break;
                }

                if (cardIndex - 1 > cur.getHandCard().size()) {
                    System.out.println("你只有" + cur.getHandCard().size() + "张牌!");
                    continue;
                }
                Card selectedCard = cur.getHandCard().get(cardIndex - 1);
                try {
                    flag = CardExec.exec(cur, selectedCard, enemy);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
                if (flag) {
                    System.out.println(cur.getName() + "使用了[" + selectedCard.getName() +
                                "], 剩余法力水晶数: " + cur.getCurCrystal());

                    Commons.printScene(cur);
                    Commons.printHandCard(cur);
                }
            }

            if (cur == B && crystal < 10) {
                crystal += 1;
            }

            if (cur == B) {
                round += 1;
            }

            turn *= -1;
        }

        return A.isAlive() ? 1 : B.isAlive() ? 2 : 0;
    }
}
