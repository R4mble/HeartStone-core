package heartstone.model;

import heartstone.box.Box;
import heartstone.invoker.CardDrawer;

import java.util.ArrayList;
import java.util.List;

public class GlobalState {
    private Profession A;
    private Profession B;
    private boolean over;
    private Profession winner;
    private Profession loser;

    public GlobalState(Profession A, Profession B) {
        this.A = A;
        this.B = B;
    }

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

        Profession shushi = Box.getProfession("术士");
        shushi.setCardLibrary(cards);

        Profession saman = Box.getProfession("萨满");
        saman.setCardLibrary(cards2);

        GlobalState g = new GlobalState(shushi, saman);

        CardDrawer.draw(g.A, 3);
        CardDrawer.draw(g.B, 4);
        g.B.getHandCard().add(Box.getSpell("幸运币"));

    }
}
