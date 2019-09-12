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
        Commons.printHandCard(A);

        while (A.isAlive() && B.isAlive()) {


            Scanner sc = new Scanner(System.in);
            int input = sc.nextInt();
            if (input == 0) {
                System.out.println("空过");
            } else {
                try {
                    CardExec.exec(A, A.getHandCard().get(input), B);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        }

        return A.isAlive() ? 1 : B.isAlive() ? 2 : 0;
    }
}
