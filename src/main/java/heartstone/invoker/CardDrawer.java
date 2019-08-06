package heartstone.invoker;

import heartstone.model.Card;
import heartstone.model.dto.Profession;

// 抽牌器
public class CardDrawer {

    public void draw(Profession src, int num) {
        while (num != 0) {
            Card card = src.getCardLibrary().remove(0);
            src.getHandCard().add(card);
            num--;
        }
    }
}
